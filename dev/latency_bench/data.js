window.BENCHMARK_DATA = {
  "lastUpdate": 1701999912075,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "c34e70172e0b150b4e3b6246371109db00077ab4",
          "message": "Release new crate versions (#645)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-11-28T18:15:56Z",
          "tree_id": "a0b8dd24929bbe3533e8294048983ee728e79253",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c34e70172e0b150b4e3b6246371109db00077ab4"
        },
        "date": 1701196009197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.2348982,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8762798,
            "unit": "milliseconds"
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
          "id": "3f25f323ed61b6a79f89b127ef3553beef460176",
          "message": "Exclude unused files from mountpoint-s3-crt-sys crate (#646)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T19:34:37Z",
          "tree_id": "d489e3876a4bf98bdb10b7b75a417d72ca38e7cc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3f25f323ed61b6a79f89b127ef3553beef460176"
        },
        "date": 1701200738977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.207,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.252,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.29633770000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.1697976,
            "unit": "milliseconds"
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
          "id": "099638eede5fc34756e46b9eb6af6582c8fe1a55",
          "message": "Fix crash on invalid part size (#649)\n\n* Return CRT client initialization error instead of panicking\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of initialization errors\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-29T17:37:44Z",
          "tree_id": "5069f4802f987ff6745d34a3db6683c10762d804",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/099638eede5fc34756e46b9eb6af6582c8fe1a55"
        },
        "date": 1701281452820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.611,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.8071857,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 97.8556614,
            "unit": "milliseconds"
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
          "id": "cc20c75bc036fae7b63675d7c00815c209024e87",
          "message": "Add workflow to verify crate packaging (#650)\n\n* Add workflow to verify crate packaging\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix indentation of workflow\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-30T08:58:13Z",
          "tree_id": "0b02989328a9c2a105759d10ae8777f034a07d2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc20c75bc036fae7b63675d7c00815c209024e87"
        },
        "date": 1701336612129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.103,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.414,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 112.0059377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.25144359999999,
            "unit": "milliseconds"
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
          "id": "963258fbf9cea26adb93d69643f1fea5684288e1",
          "message": "Update CRT submodules to latest releases (#652)\n\n* Update CRT submodules to latest releases (aws-c-s3 0.4.3)\n\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 dc90010..de36fee:\n  > Bypass for CreateSession reqeust (#384)\n  > Mem limiter validation (#385)\n  > Fix tests to use net_test_case (#383)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update S3CrtClient test to reflect loosened part size constraint\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-30T12:12:11Z",
          "tree_id": "c994bd0895147c6c801639a60df7159b6943e938",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/963258fbf9cea26adb93d69643f1fea5684288e1"
        },
        "date": 1701348313034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.715,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.9438938,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.1259727,
            "unit": "milliseconds"
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
          "id": "7530462558e9edde1127cd8642ad3e7ce84e88a2",
          "message": "Release v1.3.1 (#654)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-30T16:40:36Z",
          "tree_id": "b49784de3208e570bc83a529f1572a75dd2a58b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7530462558e9edde1127cd8642ad3e7ce84e88a2"
        },
        "date": 1701364451977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.777,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.5666615,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 94.33559690000001,
            "unit": "milliseconds"
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
          "id": "5bdf9dd20c89b712423baa58cb22554413484d7e",
          "message": "Add actions variables for S3 Express One Zone test (#648)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-01T12:04:16Z",
          "tree_id": "be62356cdb4bea6feb0f53213d88207632839c05",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5bdf9dd20c89b712423baa58cb22554413484d7e"
        },
        "date": 1701434489773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.140349,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.9615778,
            "unit": "milliseconds"
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
          "id": "53543a5e58adaf9ee962d990cb6af88fc3372817",
          "message": "Release new crate versions (#657)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-01T13:13:55Z",
          "tree_id": "bc76d407e8730cf2008342fa3e94e8a14db6b6f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53543a5e58adaf9ee962d990cb6af88fc3372817"
        },
        "date": 1701437114048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.696,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.4394499,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.584466899999995,
            "unit": "milliseconds"
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
          "id": "27bac02854e0290e2de057e0258f189c07ed0262",
          "message": "Add more details to CRT update guide (#655)\n\n* Add more details to CRT update guide\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Use numbered list with explicit numbered items\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note to check size of mountpoint-s3-crt-sys crate\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-01T17:49:31Z",
          "tree_id": "d473f55e39ae1a1739003df495090a4da135da3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27bac02854e0290e2de057e0258f189c07ed0262"
        },
        "date": 1701454876103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.583,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.40857129999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.2566788,
            "unit": "milliseconds"
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
          "distinct": false,
          "id": "0b027d56d0ef63d168642d5da98135ddf34544e7",
          "message": "Update maintainer documentation for releasing new S3 client crates (#663)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-04T13:59:06Z",
          "tree_id": "a78750d6a4766c08105453b4a3f558ef3f40a327",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b027d56d0ef63d168642d5da98135ddf34544e7"
        },
        "date": 1701700330906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.29,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 109.60736920000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 107.88575940000001,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andres.santana@gmail.com",
            "name": "andres santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecc21622948f2315100f45fa5c69aff01975bb38",
          "message": "Fix intermittent issue with metrics tests. (#662)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2023-12-04T14:01:39Z",
          "tree_id": "8095c11895349cd83d6c4e39a8e9eb89e616c5a2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ecc21622948f2315100f45fa5c69aff01975bb38"
        },
        "date": 1701700835733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.287,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.7541186,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.1456284,
            "unit": "milliseconds"
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
          "id": "90f85a3b33cfc43e95e48559a0dba48329cfb1d7",
          "message": "Fix clippy warnings (#661)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-04T14:52:49Z",
          "tree_id": "43d906b8a5e7d26770b7b40390e363c3b7712458",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90f85a3b33cfc43e95e48559a0dba48329cfb1d7"
        },
        "date": 1701703871328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.959,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.3536787,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.1108344,
            "unit": "milliseconds"
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
          "distinct": false,
          "id": "64dc9c65685be417d323e1a6323baf9d91dbe675",
          "message": "Add S3 Express One Zone tests to the CI (#660)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-06T10:24:05Z",
          "tree_id": "e4c75a4b6e2107ecba0ef7290043b3e1b5fe6633",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/64dc9c65685be417d323e1a6323baf9d91dbe675"
        },
        "date": 1701860487175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.487,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.07815959999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 86.7150744,
            "unit": "milliseconds"
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
          "distinct": false,
          "id": "6fc30b904be158179d2731400678a0eced7a46ef",
          "message": "Update Clippy CI to deny warnings (#639)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-06T13:26:05Z",
          "tree_id": "c8d75fa20fb8d8206acd502fd2695ee8695dc058",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6fc30b904be158179d2731400678a0eced7a46ef"
        },
        "date": 1701874796873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.648,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.2736414,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.1595665,
            "unit": "milliseconds"
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
          "id": "e9d7043e4b5665d5ed79d2cd0fa9a6039cfe0588",
          "message": "Remove duplicate S3 test helper functions (#664)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-06T14:33:59Z",
          "tree_id": "4e15b868e1d9cadf7cfc9238b87c92d1a75273af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e9d7043e4b5665d5ed79d2cd0fa9a6039cfe0588"
        },
        "date": 1701875077669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.633,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.3434672,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.84222059999999,
            "unit": "milliseconds"
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
          "id": "825bdf7ecebd13bccaea17953516a9d651f438b9",
          "message": "Add filename at Error and Warn level in logs (#665)\n\n* Added key in inode.rs\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added filename in warn span\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed the InodeError distinguishing *deleted marker and other recommended changes\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added parent info in FileDoesNotExist error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved the formatting of FileDoesNotExist error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-12-07T11:45:41Z",
          "tree_id": "1cbe691c7754c30045db0bbede8c9e0ce7ad46ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/825bdf7ecebd13bccaea17953516a9d651f438b9"
        },
        "date": 1701951430792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.2650307,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.5686958,
            "unit": "milliseconds"
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
          "id": "a8c29674bdcb7844a5d2b8bf18ef3164397806b0",
          "message": "Update documentation for S3 Express One Zone (#667)\n\n* Update documents for S3 Express One Zone\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update storage classes section\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2023-12-07T13:21:28Z",
          "tree_id": "ac68ea4010c4a6864a806397f5be0f4cd0791793",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a8c29674bdcb7844a5d2b8bf18ef3164397806b0"
        },
        "date": 1701957193954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.469,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.8263011,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.18127240000001,
            "unit": "milliseconds"
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
          "id": "ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d",
          "message": "Add field for cli arguments to the bug report form (#640)\n\nAlso expand the description of the behavior field to include reproduction steps.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-07T20:07:03Z",
          "tree_id": "57bc12eef9422b1aa8bec61772e78d4d7e20b2b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d"
        },
        "date": 1701982184484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.857,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.9267514,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.14057940000001,
            "unit": "milliseconds"
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
          "distinct": false,
          "id": "b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa",
          "message": "Add docs clarifications about which FS operations can be served from cache and when (#627)\n\n* Add clarification on which file system operations can be served from cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on caching behavior with writing\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T00:56:42Z",
          "tree_id": "2970551ed2a78be52c844a5cc46c366976f8314e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa"
        },
        "date": 1701999654262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.6391196,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.8194725,
            "unit": "milliseconds"
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
          "id": "863087df20e999f9e90c278ab0f0c7b8afa4e9fc",
          "message": "Add CRT error to CRT request logs, move CRT per-request logs to DEBUG (#669)\n\n* Add CRT error to underlying request log entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move all CRT request logging to debug even on error\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T01:04:11Z",
          "tree_id": "b3d5c9bfa42c7626519410fbcc30c5a11c34a7ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/863087df20e999f9e90c278ab0f0c7b8afa4e9fc"
        },
        "date": 1701999911552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.528,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 56.252989799999995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.3632506,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}