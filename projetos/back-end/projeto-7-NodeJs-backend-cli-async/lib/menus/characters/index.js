const actions = require('./actions');
const { showMenuOptions } = require('../../utils');

const showCharactersMenu = async () => {
  const action = await showMenuOptions({
    message: 'Menu de personagens -- Escolha uma ação',
    choices: [
      { name: 'Listar personagens', value: 'list' },
      { name: 'Voltar para o menu principal', value: 'back' },
    ],
  });

  if (actions[action]) {
    await actions[action].run();
    await showCharactersMenu();
  }

  return false;
};

module.exports = { run: showCharactersMenu };
