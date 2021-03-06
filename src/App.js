import { useState, useEffect } from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Nav from './Components/Nav';
import Contact from './Components/Contact/Contact';
import { commerce } from './Library/commerce';
import { Route, Switch } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import ReactNotifications from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';
//import Footer from './Components/Footer';


const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [category, setMycategory] = useState("");
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [category, products])

  const filterHandler = () =>{
      switch(category){

        case "All" : setFilteredCategory(products)
            break;

        case "Fashion" : setFilteredCategory(
                products.filter((item) =>  
                  item.categories[0].name === category
                )
            )
            break;

        case "Electronics" : setFilteredCategory(
                products.filter((item) =>  
                  item.categories[0].name === category
                )
            )
            break;

        case "Grocery" : setFilteredCategory(
                products.filter((item) =>  
                  item.categories[0].name === category
                )
            )
            break;
            
        default : setFilteredCategory(products);
      }
  }



  const fetchProduct = async () =>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () =>{
    const res = await commerce.cart.retrieve();
    setCart(res);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    
    store.addNotification({
      title: `${item.product_name}`,
      message: "Added to your cart !",
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
          duration: 3000,
          showIcon: true
        },
        width: 200,
    })
  }


  const handleUpdateCartQty = async (productId, quantity) =>{
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveCartQty = async (productId) =>{
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () =>{
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  const refreshCart = async () =>{
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) =>{
      try{
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
        setOrder(incomingOrder);
        refreshCart();
      } catch (error){
        setErrorMessage(error.data.error.message);
      }
  }

    useEffect(() => {
      fetchProduct();
      fetchCart();
    }, [])

    //console.log(getCaty()); 

    //console.log(cart);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav setMycategory={setMycategory} totalItems={cart.total_items} />
      <ReactNotifications />
      <Switch>
        <Route path="/" exact>
          <Products filteredCategory={filteredCategory} alert={alert} products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route path="/Cart"> 
          <Cart
           updateCart= {handleUpdateCartQty} 
           removeCart= {handleRemoveCartQty}
           emptyCart = {handleEmptyCart}
           cart = {cart}/>
        </Route>
        <Route path= "/checkout" exact>
          <Checkout 
            cart={cart} 
            onCaptureCheckout={handleCaptureCheckout}
            order={order}
            error={errorMessage}
            />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
