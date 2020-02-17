#!/bin/bash

file=$*

for argumentos in $file
    do
        if [ -f "$file" ]
            then
                echo "O $file é um aquivo comum"
        elif [ -d "$file" ]
            then
                echo "O $file é um diretório"
        else
                echo "O $file é um outro tipo de arquivo"
        fi

        ls -l $file
    done