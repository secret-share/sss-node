{
  "targets": [
    {
      "target_name": "shamirsecretsharing",
      "cflags": ["-g -Wall -Wno-sign-compare"],
      "sources": [
        "shamirsecretsharing.cc",
        "sss/randombytes.c",
        "sss/sss.c",
        "sss/hazmat.c",
        "sss/keccak.c",
        "sss/tweetnacl.c"
      ],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
