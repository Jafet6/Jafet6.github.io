#!/bin/bash

data_de_hoje=$(date +%d-%m-%y)

for file in `ls *.png`
    do
        mv $file ${data_de_hoje}-${file}
    done
