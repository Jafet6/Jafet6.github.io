#!/bin/bash

echo "Nome de aquivo ou diretório:"
read file

if [ -f $file ]
    then
        echo "O $file é um aquivo comum"
elif [ -d $file ]
    then
        echo "O $file é um diretório"
else
    echo "O o $file é um outro tipo de arquivo"
fi

ls -l $file