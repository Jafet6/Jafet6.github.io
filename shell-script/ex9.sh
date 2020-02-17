#!/bin/bash

diretorio=$1

if [ -d $diretorio ]
    then
        linhas=`ls -l $diretorio | wc -l`
        echo "O $diretorio tem $linhas arquivos"
else
    echo "O argumento $diretorio não é um diretório"
fi

