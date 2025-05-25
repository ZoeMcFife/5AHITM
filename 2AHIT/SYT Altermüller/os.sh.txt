#!/bin/bash

check()
{
  operatingSystem="unknown"
  os=`uname | tr [a-z] [A-Z]`
  
  case "${os}" in
    CYGWIN*)
      operatingSystem="cygwin"
        ;;
    LINUX*)
      operatingSystem="linux"
        ;;
    MINGW*)
      operatingSystem="mingw"
        ;;
  esac
  echo "operatingSystem=$operatingSystem"
}

check
