#!/bin/bash



if [ -f $1 ]
    then
        echo "O $1 é um aquivo comum"
elif [ -d $1 ]
    then
        echo "O $1 é um diretório"
else
        echo "O o $1 é um outro tipo de arquivo"
fi

ls -l $1