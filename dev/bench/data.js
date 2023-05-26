window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jiri@jpospisil.com",
            "name": "Jiri Pospisil",
            "username": "jiripospisil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81152c243fac653bcbf36a091e4411288c83ab7e",
          "message": "Add info about the unofficial AUR package to README (#239)\n\nSigned-off-by: Jiri Pospisil <jiri@jpospisil.com>",
          "timestamp": "2023-05-09T23:59:42Z",
          "tree_id": "2e9facd2fc6588d8edf934374e0ef392dbe2d639",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81152c243fac653bcbf36a091e4411288c83ab7e"
        },
        "date": 1683678023080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 995.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6098.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.9697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1872.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.23828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e592d72d4df3687cb06af60256313b83fffc0501",
          "message": "Implement CRT bindings for CRC checksum functions (#240)\n\n* Implement CRT bindings for CRC checksum functions\r\n\r\nAdd rust interfaces for CRC32 and CRC32C functions. We will be using\r\nthese functions to do data integrity check in the future.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Fix clippy errors and some small changes\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-09T22:53:41-05:00",
          "tree_id": "fd87989d0ec14a5c279049a4ca8876e160520454",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e592d72d4df3687cb06af60256313b83fffc0501"
        },
        "date": 1683692060772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 978.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5889.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1952.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.6611328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe",
          "message": "Use GitHub repository variables in the CI (#244)\n\nInstead of hard coding test variables like test bucket name or test\r\nbucket prefix in the CI, we will be using GitHub repository variables.\r\n\r\nThis allows us to change the values later without having to create a new\r\npull request, and also allows contributors to easily config these variables\r\nin their own forks.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-12T13:37:36+01:00",
          "tree_id": "9e6da8862917f8b1d0362fc2c4ba6ba364662eda",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe"
        },
        "date": 1683897640912,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1338.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6813.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1958.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 29.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.267578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d493bdff9d2dd36b5ec081a792b152d8f5f037d",
          "message": "Fix shadowing semantics doc and add tests (#242)\n\nThe doc was backwards from what we actually do and what we intended.\r\nDirectories will shadow files of the same name, in the interest of\r\nmaking as many objects visible as possible.\r\n\r\nI also added a new integration test that just quotes the documentation\r\nand implements it directly.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-12T14:58:32Z",
          "tree_id": "16aa74efde04f4b3265cc9a06e90ab2426138159",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4d493bdff9d2dd36b5ec081a792b152d8f5f037d"
        },
        "date": 1683910740482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.65625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.53125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6883.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 167.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2174.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 29.2255859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e045b417643aa82c91020d32ed6e0e65bb6205f",
          "message": "Refactor ReaddirHandle to lazily create inodes  (#238)\n\n* Move ReaddirHandle into its own file\r\n\r\n`inode.rs` is getting too long to be readable.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Refactor `ReaddirHandle` to lazily create inodes\r\n\r\nThe motivation here is that `readdir` calls from FUSE generally only\r\nretrieve a small number of entries, but ListObjectsV2 calls to S3\r\nretrieve many entries. In the current code, we instantiate inodes for\r\nthose entries as soon as the ListObjectsV2 call completes, but because\r\nof the small batch size of `readdir`, most of these inodes will not be\r\nreturned to FUSE until some time later. Because the TTL of an inode's\r\nattributes is chosen at inode creation time, it will have expired by\r\nthis point, and so the kernel will immediately re-`lookup` these entries\r\nwhen they're returned to `readdir`. That makes `readdir` do O(n)\r\n`lookup` calls back to S3, defeating the purpose of ListObjectsV2.\r\n\r\nTo solve this problem, this change refactors the `ReaddirHandle`\r\nimplementation to defer creating inodes until an entry is actually\r\nreturned to `readdir`. The big idea is that we now just create a new\r\n[ReaddirEntry] struct for each entry returned by ListObjectsV2, and all\r\nthe `readdir` logic works in terms of those things rather than directly\r\non inodes. The conversion from [ReaddirEntry] to an actual inode then\r\nhappens right before returning the entry to `readdir`.\r\n\r\nI took this opportunity to refactor this code (hopefully for the\r\nbetter!) since this change was adding yet another layer of complexity\r\ninto the logic for iterating directory entries. I also tried to capture\r\nmy understanding of this code in a new module comment. There is still a\r\nbug here around page sizes (#190) that I think this comment and refactor\r\nwill make it easier to fix, but let's do that separately to avoid making\r\nthis change bigger.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-12T12:27:36-05:00",
          "tree_id": "fcfc80546752ff1c34a9e9d8b57e514c5daa3101",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e045b417643aa82c91020d32ed6e0e65bb6205f"
        },
        "date": 1683913710348,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.3505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.3994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6893.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 168.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.6953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1815.6357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.486328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b153d819612fca772f06dd1be27e587554f28705",
          "message": "Implement releasedir and clean up directory handles (#241)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-15T11:00:13-05:00",
          "tree_id": "2b0bc0dd4b3dc578448d72ade105d6c7fe036e3e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b153d819612fca772f06dd1be27e587554f28705"
        },
        "date": 1684167695009,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 26.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 925.826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6453.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 151.109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2079.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.99609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48b51326d6ce4ba3d825a4428492917dc8bf5321",
          "message": "Add benchmarks for CRT checksum bindings (#246)\n\nJust a few simple benchmarks to make sure our bindings aren't\r\naffecting performance. This should also make it easy to play\r\nwith performance on Graviton.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-15T18:55:27+01:00",
          "tree_id": "b0f2f0be30f14134b1b34cbc8c28d4d43bd698f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48b51326d6ce4ba3d825a4428492917dc8bf5321"
        },
        "date": 1684174624620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.1455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 28.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1013.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6604.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2313.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 22.806640625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95d0147308f6d5942e19840fe6d99e94777f18d3",
          "message": "Fix default config for logging (#245)\n\nWe'd like to capture info-level logs by default -- they report useful\r\ninformation including metrics and failed requests. I was also wrong\r\nabout the \"brutal hack\" for providing a default value for RUST_LOG --\r\n`EnvFilter::new` has always existed to parse a string, so let's use that\r\ninstead.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-16T10:04:20-05:00",
          "tree_id": "275f67a0130017a82d6ed72a8e5283f8db88db8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/95d0147308f6d5942e19840fe6d99e94777f18d3"
        },
        "date": 1684250850939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.9365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 25.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 3.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 961.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6994.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 152.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2077.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.1123046875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d96822beb25b631c2f266905fb7a6e196d8b85a7",
          "message": "Use more specific labels for self-hosted runners (#248)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-16T16:54:25+01:00",
          "tree_id": "592f736597371b34663ff2e2d460d03fa5cacdf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d96822beb25b631c2f266905fb7a6e196d8b85a7"
        },
        "date": 1684277973392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1279.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6765.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2167.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.5048828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0094cd4788f9c37ebef7090be436c40fcee3793d",
          "message": "Add incremental writes to reftests (#249)\n\n* Add incremental writes to reftests\r\n\r\nIn #229 we added initial support for writes to the reference model\r\ntests. So far, those tests have only covered writing to a file as a\r\nsingle atomic operation (create, open, write, close), but we'd also\r\nlike to test interleavings of those individual operations, so that we\r\ncan see, for example, multiple writers try to touch the same file.\r\n\r\nThis change adds the create/open/write/close steps as separate\r\noperations that the reftest can choose to perform in any order. We\r\nretain the original atomic operation, but it's now just a \"shortcut\"\r\nthat does all four steps together.\r\n\r\nThe important thing we do here is introduce a couple of \"index\" types\r\nthat `proptest` can generate. These indexes allow the generated test to\r\nrefer to inflight writes, existing directories, etc all without actually\r\nneeding to understand paths. The indexes are strongly typed even though\r\nthey're just wrappers around `usize` so that we don't mix them up.\r\n\r\nThis change is hopefully also a template for how to add additional\r\noperations in the future: we need to add new variants to `Op`, implement\r\na `perform_` method for them, and think about how to track any inflight\r\nstate so that future operations can refer to it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Address PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-17T15:42:09-05:00",
          "tree_id": "8d38621d953018b7d29bd6243bc2c0b0d1a3efe5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0094cd4788f9c37ebef7090be436c40fcee3793d"
        },
        "date": 1684357460808,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.2109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6599.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2197.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.986328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bcd182c9e2165c24981a5e334ee1e202c66dc84",
          "message": "Add a CI job to validate Graviton instance support (#250)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-18T09:53:19+01:00",
          "tree_id": "0194ce7eda6e3470b3ad0897b039845f3f8870b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4bcd182c9e2165c24981a5e334ee1e202c66dc84"
        },
        "date": 1684401327609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.53125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.5791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.6416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1184.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6617.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 154.0751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1800.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.505859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91df4c441b507aefc3c8421d13881589378fa740",
          "message": "Allow custom credentials providers for S3CrtClient (#252)\n\n* Allow custom credentials providers for S3CrtClient\r\n\r\nThis slightly generalizes the work we've done to expose profiles and\r\nno-sign-request by allowing a custom credentials provider. Right now,\r\nonly the CRT providers that we've explicitly bound can be used here, but\r\neventually we'll bind the `aws_credentials_provider_delegate` version\r\nthat can invoke an arbitrary callback to fetch credentials. For now,\r\nadded a static provider that can be manually configured with credentials\r\nfor customers using the client as a library with credentials vended\r\nfrom elsewhere.\r\n\r\nI also took this chance to write a test for the profile credentials\r\nprovider. It's a little annoying to do because CLI profiles are global\r\nstate, so we do it by forking the test into a new process where it's\r\nsafe to futz with the environment variables we need. Along the way, I\r\nrealized that the CRT auth provider prefers the AWS_PROFILE environment\r\nvariable over `--profile`, which is the wrong behavior, so I fixed that\r\nby unsetting the variable in main.rs.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Update mountpoint-s3-crt/src/auth/credentials.rs\r\n\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2023-05-22T17:03:38Z",
          "tree_id": "9f4c6f66fcc8d638918b5605c9c2a572e5ff59de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91df4c441b507aefc3c8421d13881589378fa740"
        },
        "date": 1684776319997,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.8857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.84375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.0458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1113.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6639.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 157.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2245.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.3115234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27b28fdd837e855bce93be7fa264e9596434b5e0",
          "message": "Improve file handles locking (#253)\n\n* Improve file handles locking\r\n\r\nCurrently, we're holding the lock on the file handles hash table for the\r\nwhole read and write operations. It blocks other operations from interacting\r\nwith the hash table, especially at high concurrency. Instead, we can hold\r\nthe read lock for only a short period and use the file handles via atomic\r\nreference.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add error log\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-22T17:11:05Z",
          "tree_id": "69e72899343ab06c3139b17f714ed56a32882469",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27b28fdd837e855bce93be7fa264e9596434b5e0"
        },
        "date": 1684776792966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.2177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.8125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 968.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7155.0625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 157.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1906.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.6328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f986b879acb4ce2d967befa8f53e30ba53cc4c87",
          "message": "Implement expiry times for `lookup` and `getattr` results (#254)\n\nToday we don't quite have our management of TTLs correct, especially in\r\n`getattr`, which never refreshes attributes. We also want to start using\r\nTTLs correctly to improve performance in common cases like listing a\r\ndirectory with `ls -l`, which issues a `stat` for every directory\r\nentry.\r\n\r\nThe overall goal of this change is to correctly track TTLs within the\r\ninode code and return them to FUSE. We configure two types of TTLs, one\r\nfor files and one for directories, because directory attributes are\r\nqueried far more often (for permissions). We make this work by adding a\r\n`validity()` method to `LookedUp`, which FUSE operations query when they\r\nneed to indicate the validity of an entry they're returning. Then, in\r\n`getattr`, we check if the attributes are stale before returning them.\r\n\r\nWith this change, running `ls -l` on a nested directory with 1000 entries\r\ngoes from taking 165 seconds to < 1 second.\r\n\r\nI have three followup changes planned here, but this diff was already big\r\nenough:\r\n1. Document the new consistency behavior `in doc/SEMANTICS.md`.\r\n2. Write tests for the TTL behavior. This is too hard to do right now\r\n   because the tests are very sensitive to timing. I think we'll want a\r\n   way to mock the clock so we can control it.\r\n3. I think we can just totally remove the `stat` field from remote\r\n   inodes. The idea is that FUSE only ever calls `lookup` or `getattr`\r\n   if the cache has already expired, so keeping a cached copy of the stat\r\n   around is useless (it'll always be expired when queried). Removing this\r\n   field should make the inode code a bunch simpler since there's no longer\r\n   a need to track/update stats for remote files.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-24T12:34:42-05:00",
          "tree_id": "2d8e00abbea31cb60364ec829dbe599162d63213",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f986b879acb4ce2d967befa8f53e30ba53cc4c87"
        },
        "date": 1684951028003,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1198.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6338.0810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.8251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1681.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.64453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.5693359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e83c806bb7da33983ecb75736f2bdd2b8ff96d0b",
          "message": "Implementation of rmdir() (#247)\n\n* Implemented basic rmdir, need to add tests. Want to get reviews on cases I am missing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the deleted case for rmdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the Delete state of the directory rather than its parent\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added fuse test for simple operation on rmdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the s3 test cfg for rmdir_test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the order of locking and deletion\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the ErrorKind in case of removing delted directory\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the tests and added deleted boolean for delete status\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected order of directory name in rmdir test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added concurrent parent deletion case in create()\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test for concurrent create and rectified nits\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* corrected the error code in rmdir_test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed useless assertion in child removal\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* readdir and getattr still working after rmdir as it does not checkparent\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Separated remote direcotry test and added close file test case\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added a few more tests\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Changed error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Changed directory order for read_dir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed redundant inode_kind variable\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test for rmdir on directory with local file\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made directory marker as directory\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* changed error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Dropping the file to close it for testing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added comment about error in closing file\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test to check rmdir not working on files\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved formatting according to suggestions\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved error comment according to recommendation\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made the state consistent for concurrent rmdir create test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed apparent test for concurrent rmdir create\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added other tests\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Modified the locking method to acquire single lock in 1 process\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* delete status check removed from create\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* positioned deleted flag in rmdir before removing from children as it is within a single lock\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the recommended changes to not unwrap the get inode state method\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved according to suggestions\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* removed unwrap from ancestors states and other minor changes\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Turbofish the type for ancestor iterator\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed comment from pre-merge\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-25T17:27:22+01:00",
          "tree_id": "9423d5cb98f12dffe7dbd8d3859b1361302d0645",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e83c806bb7da33983ecb75736f2bdd2b8ff96d0b"
        },
        "date": 1685033384937,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.44140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 972.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6458.0546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 153.6123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2132.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.6650390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91f44b5e5dece075b1b4f3ae5f1f44078f2d297e",
          "message": "Add RustDoc for `fs`,`fuse`,`sync` modules, and on `InodeInner`'s `sync` field (#257)\n\n* Add/expand on module documentation comments for fuse,fs,sync\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add RustDoc describing how children should be used and how locks should be taken\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-25T13:41:53-05:00",
          "tree_id": "f57021eb1c4cad607b5e2235780f9a8ce0c91678",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91f44b5e5dece075b1b4f3ae5f1f44078f2d297e"
        },
        "date": 1685041446814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1287.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6707.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 154.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2018.416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.6533203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b0c59df057de8143ace1881e8a29d512123bfd9",
          "message": "Add initial semantics documentation for `rmdir` (#236)\n\n* Proposed initial semantics for rmdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Small change: Added brackets for link to work\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved the sentence formation\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed the use of local keyword, and explained the case of remote files\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Update doc/SEMANTICS.md\r\n\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved the grammar of the remote directory case to make context more understandable\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2023-05-26T09:50:18+01:00",
          "tree_id": "5c0847df5d677c1a3b80528cfbadff053d03f533",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6b0c59df057de8143ace1881e8a29d512123bfd9"
        },
        "date": 1685092352117,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.0380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1069.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6754.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 163.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2019.1318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.0107421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "886f9edc710db61f8d2bcee597b15d300db6c383",
          "message": "Prepare to publish client and CRT crates (#260)\n\nThis change adds READMEs and CHANGELOGs for the client, crt, and crt-sys\r\ncrates, and bumps their version numbers just for clarity. It changes the\r\npath dependencies to also include version numbers, so that local builds\r\nof Mountpoint will use the path dependency but published releases will\r\nuse the published dependencies.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-26T10:48:54+01:00",
          "tree_id": "f8be47fb956de4aad79eab83c21b82c28eb6a2e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/886f9edc710db61f8d2bcee597b15d300db6c383"
        },
        "date": 1685095843062,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.4189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 998.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.1455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6650.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.29296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1873.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 22.9892578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83d2a44793d12a4808fe9430440abe6acaedf7a2",
          "message": "Updated CRT modules for publish later (#262)\n\n* Update CRT submodules to latest releases\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* typecasted part_size from usize to u64, other update to the CRT module as it is\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-26T14:04:41+01:00",
          "tree_id": "589c12edaf043ea9b23ed29d92f7e6d4ad6c5536",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/83d2a44793d12a4808fe9430440abe6acaedf7a2"
        },
        "date": 1685107483234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.5234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.1103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1378.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7061.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2044.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.1484375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e73c0ffecb56607ab90b370459280a2e5da5c0f",
          "message": "Fix issue with file shadowed by a deleted directory (#256)\n\nThis change fixes an issue where a file that had been shadowed by a directory would still not become visible after the directory was removed from S3.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-26T15:07:41+01:00",
          "tree_id": "5a2b5e1c6bd90de179b8aa27c5b855a63536dd55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e73c0ffecb56607ab90b370459280a2e5da5c0f"
        },
        "date": 1685111446664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1248.6328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6718.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.8388671875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1685111447193,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}