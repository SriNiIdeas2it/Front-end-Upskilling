const CartProduct = ({data}) => {
  if (!data) return null;

  return (
    <div className='cls-each-product'>
      <div className='div-product-image'><img src={data.images?.[0]} alt={data.title} /></div>
      <div className='div-center-product'>
        <div className='product-title'>{data.title}</div>
        <div className="product-disc">{data.description}</div>
        <div className='div-product-buttons'><button>+</button><button>-</button><button>Remove</button></div>
      </div>
      <div className='div-price'>${data.price}</div>
    </div>
  )
}

export default CartProduct
