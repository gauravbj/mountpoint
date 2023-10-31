//! Traits and types for data caching.
//!
//! The data cache aims to reduce repeated fetches of S3 object content,
//! reducing both the number of requests as well as the latency for the reads.
//! Ultimately, this means reduced cost in terms of S3 billing as well as compute time.

pub mod in_memory_data_cache;

use std::ops::RangeBounds;

use mountpoint_s3_client::types::ETag;
use thiserror::Error;

pub use crate::checksums::ChecksummedBytes;

/// Struct representing a key for accessing an entry in a [DataCache].
#[derive(Clone, Debug, Hash, PartialEq, Eq)]
pub struct CacheKey {
    s3_key: String,
    etag: ETag,
}

/// Indexes blocks within a given object.
pub type BlockIndex = u64;

/// Errors returned by operations on a [DataCache]
#[derive(Debug, Error)]
pub enum DataCacheError {
    #[error("IO error when reading or writing from cache: {0}")]
    IoFailure(#[from] std::io::Error),
    #[error("Block content was not valid/readable")]
    InvalidBlockContent,
}

pub type DataCacheResult<Value> = Result<Value, DataCacheError>;

/// Cache data with a checksum identified by some [CacheKey].
///
/// The underlying cache is divided into blocks of equal size.
///
/// TODO: Deletion and eviction of cache entries.
/// TODO: Some version information (ETag) independent from [CacheKey] to allow smarter eviction?
pub trait DataCache {
    /// Get block of data from the cache for the given [CacheKey] and [BlockIndex], if available.
    ///
    /// Operation may fail due to errors, or return [None] if the block was not available in the cache.
    fn get_block(&self, cache_key: &CacheKey, block_idx: BlockIndex) -> DataCacheResult<Option<ChecksummedBytes>>;

    /// Put block of data to the cache for the given [CacheKey] and [BlockIndex].
    fn put_block(&self, cache_key: CacheKey, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()>;

    /// Returns the block size for the data cache.
    fn block_size(&self) -> u64;

    /// For the given range of blocks, which are present in the cache?
    /// Indices in the vector are already sorted.
    ///
    /// It is possible that the **blocks may be deleted before reading**, or may be corrupted or inaccessible.
    /// This method only indicates that a cache entry was present at the time of calling.
    /// There is no guarantee that the data will still be available at the time of reading.
    fn cached_block_indices<R: RangeBounds<BlockIndex>>(
        &self,
        cache_key: &CacheKey,
        range: R,
    ) -> DataCacheResult<Vec<BlockIndex>>;
}
