#!/bin/bash

caminho="/home/jafet/exercícios/shell_script/ex2.sh"

if [ -e $caminho ]
then
    echo "O caminho $caminho está habilitado"
fi

if [ -w $caminho ]
then 
    echo "Você tem permissão para editar o $caminho"
else
    echo "Você não tem permissão apra executar o $caminho"
fi



