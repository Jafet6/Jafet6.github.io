// carrinho de compras redux

//2 componentes 1-lista de produto 2-carrinho de compras

// guardar o estado do carrinho e minha lista de produto

// 1 - criar a store, e o combine

// 2 - reducer

const INITIAL = {
  cart: [],
  totalPrice: 0,
}

const reducer = ( state = INITIAL, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, {...action.produto}],
        totalPrice: state.totalPrice + action.produto.price,
      }
      default: 
       return state;
  }
}

// action 

const ADD_TO_CART = 'ACAO_DE_ADICIONAR_AO_CARRINHO';
// produto é um arquivo a parte que eu chamo no componente

const lista = (produto) => ({
  type: ADD_TO_CART,
  produto,
});

// faz o Provider

<tbody>?</tbody>
//importar a ação e passar para o dispatch

const dispatchto = (dispatch) => ({
  addTocart: (produtos) => dispatch(myaction(produtos))
})

// essa ação vc passa para o componente { addTocart } 
onClick = () => addTocart(produto);

const mapStatetoprops = (state) => ({
  card: state.reducer.card
})