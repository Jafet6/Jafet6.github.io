#!/bin/bash

for d in curso-Trybe/*/
do
  cd "$d"
  if [ -d "$node_modules" ] 
    then rm -r node_modules
  fi
done

$ cd documents 
$ find . -name "node_modules" -type d -prune | xargs du -chs #mostra quanto de memória os diretórios gastam
find . -name "node_modules" -type d -prune -exec rm -rf '{}' + #exclui todos os diretórios com o nome desejado
