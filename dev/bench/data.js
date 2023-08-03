window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "distinct": false,
          "id": "c40ff340fcde9c6500d57982578bdcc4384a31f6",
          "message": "Update CRT submodules to latest releases (#407)\n\n* Update CRT\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update UPDATING_CRT.md to show diff for all CRT submodules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-25T12:53:01Z",
          "tree_id": "29af0fbd4d978fe3466394ae1a717140c62f41fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c40ff340fcde9c6500d57982578bdcc4384a31f6"
        },
        "date": 1690292166632,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.87109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5890.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1602.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2002.72,
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
          "id": "173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a",
          "message": "fs: refactor to use a structured error type (#405)\n\nToday the `fs` layer's methods all return `libc::c_int`, which means the\nconversion to errno happens here. This throws away a lot of error\ninformation, and we find ourselves adding ad-hoc calls to `error!` to\nsave context we think is important.\n\nThis change refactors `fs`'s methods to return a new structured `Error`\ntype, which still includes the errno `c_int` but also a message and an\noptional source (an `anyhow::Error`). We could almost use\n`anyhow::Error` directly except that we need the errno conversion and\nwe'd like to attach a little extra context message to the errors. We\nconstruct this wrapper with a new `err!` macro that puts the message and\nsource in the right place.\n\nThis change removes the ad-hoc `error!` logging we were using in a few\nplaces in `fs` previously. I'll follow it up with another change that\nadds a new proc macro to annotate every `fs` function to automatically\nprint its error in failure cases, which will return these log messages\nand also add all the missing ones.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T15:03:35Z",
          "tree_id": "69a1c19d604bc27496bf24071621d04f7eab91d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a"
        },
        "date": 1690299815278,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.2412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.84375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5555.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1799.375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.1435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1716.61,
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
          "id": "c419a6e86d6c32b5ceaf2c700291072754b4d9fa",
          "message": "Endpoint Resolver for each request (#396)\n\n* Included endpointConfig in S3Client and updated with latest codbase\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added regex for ARN and added region retries for special requests like transfer acceleration MRAP etc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the comment for ARN supporting Regex\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the path prefix of endpoint uri\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added specific regex for ARN matching\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary error cases and added arn bucket name test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Made a few changes according to recommendation\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added tests for ARN, still need to exclude objects from it\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added all the recommendations, some tests left\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added unit tests for endpoint config\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected borrowing\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed arg group of addressing style\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved error message for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes in ChangeLog for mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected gramatical mistake in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Simplified ARN even further\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added failure test for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes recommended and failure test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Remove unnecessary assert_matches dependency\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T19:35:05Z",
          "tree_id": "f3c2c380ea22cc7c936a723b826c0920ba056abd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c419a6e86d6c32b5ceaf2c700291072754b4d9fa"
        },
        "date": 1690316351351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5736.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1916.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 828.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1239.78,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "47d06c127d482212b89291ffc62a3604169c5db6",
          "message": "Fix region detection with specified region (#409)\n\n* Fix region detection with specified region\n\nWe weren't setting the region in the endpoint config if it was specified\nmanually. This passed our tests because it was defaulting to us-east-1\nand that's where our CI is. Instead, let's start with an obviously wrong\nplaceholder region and fill it in when creating the client.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix warning message\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T10:32:22Z",
          "tree_id": "1f8f7ef8166bb0826a3dfe764d766c116237b52b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47d06c127d482212b89291ffc62a3604169c5db6"
        },
        "date": 1690370581978,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5786.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1846.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1042.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dfc30c1d591b273274ec870af9caf8a34dd3ca0",
          "message": "Adds storage class (#400)\n\n* Adds in support to configure storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* removes default storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds integration tests\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* changes as per review comments\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fix lint error\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds in tests for mock client\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* removes unused imports\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* return storage class in option\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* throw error if obj not found\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2023-07-26T14:22:08Z",
          "tree_id": "5820419ade3f78e5eb2a31b92c87f32bdd726f69",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dfc30c1d591b273274ec870af9caf8a34dd3ca0"
        },
        "date": 1690384029935,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5609.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1585.3408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 935.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
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
          "distinct": false,
          "id": "c1720bc41e22cf9c199285151218e0c41dd21200",
          "message": "Add flags for logging configuration (#404)\n\nThis simplifies how we ask customers to configure logging by no longer\nexposing them to RUST_LOG or filtering directives. Instead, we add a\n`--debug` flag to enable verbose logs, and `--debug-crt` to enable\nverbose CRT logs (which are spammier). We also add a `--no-log` flag to\ncompletely turn off logging, and `--log-metrics` to emit the summarized\nperformance metrics.\n\nThis change also fixes a bug in the syslog implementation with events\nthat come via `tracing-log` (the adapter for emitting `tracing` events\nfrom the `log` facade). We use this adapter for adapting CRT logs into\n`tracing`, since `tracing` is very picky about log events having static\nmetadata but CRT logs are necessarily dynamic. The `tracing-log` adapter\nrecords metadata in some custom fields, which we weren't correctly\nhandling, so our log messages had the wrong `target` and a bunch of\nextra fields. This change is annoying to write a test for because `log`\nis global, but I tested it manually.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:23:44Z",
          "tree_id": "c103b9eae65b848eb73ab31a92e460e33a8a970c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c1720bc41e22cf9c199285151218e0c41dd21200"
        },
        "date": 1690387840726,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.0625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5511.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 195.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.5234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.4443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1716.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1284.103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1239.78,
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
          "id": "3832ccadee82326a9adb19e38322bdbe6ff9bec5",
          "message": "fuse: log all operation failures (#408)\n\nI was going to do this in a proc macro but this is way simpler. This\njust follows up on #404 by recording all the errors, using a small macro\nin place of the existing calls to `reply.error(libc::c_int)`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:24:22Z",
          "tree_id": "6b928023b6fda77ffd055facd6f5e634ac98fd16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3832ccadee82326a9adb19e38322bdbe6ff9bec5"
        },
        "date": 1690387874496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.4599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.7470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5773.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.95703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1552.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 730.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a",
          "message": "Add S3_SUBSESSION_IAM_ROLE environment variable (#412)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T17:15:13Z",
          "tree_id": "36fd375f542617b4e3c07587e8aed7c3ed5b3260",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a"
        },
        "date": 1690394497350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5606.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 224.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1569.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.4609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 719.98046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "54851a95c609bcae7226cecb198d0a9fb9b59679",
          "message": "Add new subsession IAM role for auth integration tests (#410)\n\nWe want to be able to write tests with various permutations of IAM\ncredentials and policies (read only, prefix only, etc). Rather than\nmanually building new infrastructure for them, we're creating a single\nnew IAM role that tests can call AssumeRole on, using a session policy\nto scope down the credentials to those they want to test.\n\nI'll be using this in a follow-up commit to switch from HeadBucket to\nListObjects for region detection. I suspect we can also use it to get\nrid of our \"forbidden\" bucket, but don't plan on doing that right now.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T18:10:21Z",
          "tree_id": "ca4cf30996edbb4fad5511fa24b4b1de3b9e2ee2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54851a95c609bcae7226cecb198d0a9fb9b59679"
        },
        "date": 1690397661464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5938.8095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1834.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.97265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 659.9794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a",
          "message": "Add S3_SUBSESSION_IAM_ROLE environment variable (#412)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T17:15:13Z",
          "tree_id": "36fd375f542617b4e3c07587e8aed7c3ed5b3260",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a"
        },
        "date": 1690398150884,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6081.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1974.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 536.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "distinct": false,
          "id": "df4087bd63de7ff31984d9cc0e4a0db951359c11",
          "message": "Use ListObjectsV2 instead of HeadBucket for region detection  (#413)\n\n* Refactor error handling for S3CrtClient\n\nThere are some generic errors like region redirects and permissions that\nwe'd like to parse in only one place rather than all over the code. This\nchange moves those errors to S3RequestError and rejigs the parsing code\nappropriately.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Use ListObjectsV2 instead of HeadBucket for region detection\n\nHeadBucket requires `s3:ListBucket` permissions for the root of the\nbucket, but some customers scope their users' access down to only a\nprefix of the bucket. This makes it impossible for them to use prefix\nmounts today. Instead, we want to use ListObjects on the prefix as the\nregion detection mechanism.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:19:15Z",
          "tree_id": "233f258f7f59f2628e626917305d3675d057bebe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df4087bd63de7ff31984d9cc0e4a0db951359c11"
        },
        "date": 1690497442467,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.8251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5869.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1712.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 745.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "cfe1f39bb2d7ebb32b6dd1a43134466578814df5",
          "message": "Present flexible retrieval objects with 000 permissions (#414)\n\n* Present flexible retrieval objects with 000 permissions\n\nObjects in the Glacier Flexible Retrieval and Glacier Deep Archive\nstorage classes (and their corresponding Intelligent Tiering tiers) are\nnot readable with GetObject without first triggering a restoration. We\ndon't offer the ability to do that (and it likely wouldn't make sense\nfor us given the latency), but these objects will still appear in the\nfile tree, so we give them 000 permissions and EACCES failures to make\nclear they're not accessible.\n\nIt would be nice to make this work for objects that have already been\nrestored, which still carry the GLACIER/DEEP_ARCHIVE storage class but\nalso return their restore state with HeadObject. But ListObjectsV2 gives\nus no way to find that out. We could probably make this work since we\nknow we always send a HeadObject on `open`, but it was more work than I\nwanted to do right now, and this at least prevents customers getting EIO\nerrors on these objects.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Intern storage classes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:54:03Z",
          "tree_id": "1eea8fe286a302fcd81ba7a923458cb378dd3a29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfe1f39bb2d7ebb32b6dd1a43134466578814df5"
        },
        "date": 1690497490865,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.7890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5635.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1794.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 783.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "distinct": false,
          "id": "d6b530f3dc6d5ea5c5c50e79afad283da16333a6",
          "message": "Dynamically scale fuse threads (#411)\n\n* Update vendored fuser to 07f1987\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Dynamically scale fuse threads\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Replace --thread-count with --max-threads\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update benchmark scripts\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-28T18:41:35Z",
          "tree_id": "0066a6468f3ac391fa53698f63152e4a4e7c438c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d6b530f3dc6d5ea5c5c50e79afad283da16333a6"
        },
        "date": 1690572420095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.46875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5559.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1478.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.6162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 639.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.8154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
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
          "id": "9775eef1bf084c2d3b7af2454ce062b6b9fa0324",
          "message": "Map all HTTP 403 errors to S3RequestError::Forbidden (#419)\n\nThere's a long list of potential error codes that all map to 403, and we\nonly picked a few. Mapping them all makes what happened a little clearer\nin logs. They're not all \"permissions\" errors, so I renamed it to the\nmore generic \"forbidden\" (which is what HTTP 403 is).\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-29T03:31:42Z",
          "tree_id": "d7c53e2e3436c622dc5973fcafb202c33228c757",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9775eef1bf084c2d3b7af2454ce062b6b9fa0324"
        },
        "date": 1690604388272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5578.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1598.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 642.3115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "distinct": false,
          "id": "0beb3227c1a1eedc2264ae2a2052c32719d9cf0d",
          "message": "Fix clippy error on macOS (#421)\n\nlibc::mode_t has a different width on macOS (u16 vs u32), so we need to cast the result of metadata.permissions().mode() before masking it.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-31T15:19:42Z",
          "tree_id": "0af61f336418dc1f5a4fcc863f647e887e6f1666",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0beb3227c1a1eedc2264ae2a2052c32719d9cf0d"
        },
        "date": 1690819933180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5536.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1788.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 474.0751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "a39424cfb842bd4e0df3137da784b8ec4c430945",
          "message": "Revamp semantics documentation (#418)\n\nThis tries to extract a higher-level story for the semantics\ndocumentation to lead with. It covers updates we've made since alpha,\nincluding consistency and durability.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-31T18:55:30Z",
          "tree_id": "e6e6ba6fca02968968374371d7b98ac41d64e2c3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a39424cfb842bd4e0df3137da784b8ec4c430945"
        },
        "date": 1690832530860,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.5263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.90625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.95703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5663.7890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.8076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1561.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 563.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "a0060db02f54c73fd7b5cace76144b52c2694559",
          "message": "Build infrastructure for release packages (#420)\n\n* Build infrastructure for release packages\n\nThis commit adds a first pass at build infrastructure for assembling\nMountpoint releases. It builds RPM and DEB packages and a tar.gz archive\nfor distributions that don't use those package managers. The RPM and DEB\nare preferred because they check for the necessary dependencies.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Rename `release` -> `package`\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-01T15:51:50Z",
          "tree_id": "80caf928316d4df1ca13b81e8377b0b1b3a4a57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0060db02f54c73fd7b5cace76144b52c2694559"
        },
        "date": 1690908033420,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.8798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5713.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1794.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 596.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1716.61,
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
          "id": "c61d0cbca272f652fd11314a7d1e12453954067c",
          "message": "Prepare release workflow (#424)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-02T10:07:58-05:00",
          "tree_id": "0a7e9aa1670e9a62ddecde703ea8c1d96152ad00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c61d0cbca272f652fd11314a7d1e12453954067c"
        },
        "date": 1690990248226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.34375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 0.40625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5452.5263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1696.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 491.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1239.78,
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
          "id": "10110867188a2a53c6dd9c81a63e1b8cad9fdea6",
          "message": "Bump version of mountpoint-s3 to v0.4.0 (#425)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-08-02T10:13:13-05:00",
          "tree_id": "8bd870fb7566d745b9ac16d87bfd7e0891779362",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10110867188a2a53c6dd9c81a63e1b8cad9fdea6"
        },
        "date": 1690990565320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.21875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5854.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 178.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1659.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1111.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 31.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "ae18473cf5668df8fd6e09b49b7a665464786b8b",
          "message": "Use AWS_REGION and IMDS to determine region (#422)\n\n* Add support for AWS_REGION to determine region\n\nDetermine the region using the following sources (in order):\n  * `--region` flag,\n  * `AWS_REGION` environment variables,\n  * default region (us-east-1).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add get_identity_document to the IMDS client\n\nExtend the IMDS client to query the identity document of the current EC2 instance. The identity document is returned as a json response, which is parsed (using serde) to extract  the region and the instance type. The new `get_identity_document()` is tested by comparing its result to those obtained via the SDK.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use AWS_REGION and IMDS to determine region\n\nDetermine the region using the following sources (in order):\n  * `--region` flag,\n  * `AWS_REGION` environment variables,\n  * EC2 instance region (using the IMDS client),\n  * default region (us-east-1).\n\nIn order to avoid querying the IMDS twice, this change also refactors the retrieval of the instance type (used in the calculation of the maximum network throughput). The new type `InstanceInfo` will lazily query the IMDS client for both value if and when required.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move InstanceInfo into a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Refactor all region handling logic into get_region\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove unused methods in ImdsCrtClient and ImdsClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-08-03T03:58:05Z",
          "tree_id": "b9587bef66f6f489e6b0a9ee5282036eb2af2c89",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae18473cf5668df8fd6e09b49b7a665464786b8b"
        },
        "date": 1691037694695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.6875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5728.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.8603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1515.70703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1004.9248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1239.78,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1691037695300,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}