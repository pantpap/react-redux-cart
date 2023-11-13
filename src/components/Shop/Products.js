import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My first book', description: 'The first book ever'},
  { id: 'p2', price: 7, title: 'My second book', description: 'The second book ever'},
  { id: 'p3', price: 8, title: 'My third book', description: 'The third book ever'},
  { id: 'p4', price: 9, title: 'My fourth book', description: 'The fourth book ever'},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
