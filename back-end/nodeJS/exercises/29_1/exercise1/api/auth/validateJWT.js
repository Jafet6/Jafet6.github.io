const jwt = require('jsonwebtoken');
const model = require('../../models/user');

// Mesma chave privada que usamos para criptografar o token.
// Agora, vamos usá-la para descriptografá-lo.
// Numa aplicação real, essa chave jamais ficaria hardcoded no código assim,
// e muitos menos de forma duplicada, mas aqui só estamos interessados em
// ilustrar seu uso ;)
const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  // Aquele token gerado anteriormente virá na requisição através do
  // header Authorization em todas as rotas que queremos que
  // sejam autenticadas.
  const token = req.headers['authorization'];

  // Caso o token não seja informado, simplesmente retornamos
  // o código de status 401 - não autorizado.
  if (!token) {
    res.status(400).json({ error: 'Token não encontrado ou informado' });
  }

  try {
    // Através o método verify, podemos validar e decodificar o nosso JWT.
    const decoded = jwt.verify(token, segredo);
    /*
      A variável decoded será um objeto equivale ao seguinte:
      {
        data: {
          _id: '5e54590ba49448f7e5fa73c0',
          username: 'italssodj',
          password: 'senha123',
          __v: 0
        },
        iat: 1582587327,
        exp: 1584774714908
      }
    */

    // Caso o token esteja expirado, o próprio JWT irá retornar um erro, por isso não é necessário fazer validação
    // Caso esteja tudo certo, nós então buscamos o usuário na base para saber
    // se esse token não foi gerado através de alguma plataforma de gerador
    // de JWT, por exemplo.
    const user = await model.findOne({ _id: decoded.data._id });

    // Não existe um usuário na nossa base com o id informado no token.
    if (!user) {
      res.status(401).json({ message: 'Erro ao procurar usuario do token.' });
    }

    // O usuário existe! Colocamos ele em um campo no objeto res.
    // Dessa forma, o usuário estará disponível para outros middlewares que
    // executem em sequência ou para a callback que lida com a requisição.
    req.user = user;

    // Por fim, chamamos o próximo middleware que, no nosso caso,
    // é a própria callback da rota.
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Erro: Seu token é inválido' });
  }
};