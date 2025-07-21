export const Cart = () => {
  const { cartitems, setCartItems, setCartItemslen } = useContext(UserContext);

  // Aggregate cart items correctly
  let cartitems_Count = [];
  cartitems.forEach((item) => {
    const existingItem = cartitems_Count.find((it) => it.id === item.id);

    if (existingItem) {
      existingItem.amount += item.amount ?? 1;
    } else {
      cartitems_Count.push({
        item,
        id: item.id,
        amount: item.amount ?? 1,
      });
    }
  });

  // Clear cart on backend
  async function clearCart() {
    const API_URL = "https://swiggy-clone-app-production.up.railway.app";
    try {
      const res = await fetch(`${API_URL}/api/cart/deleteItems`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: sessionStorage.getItem("UserID"),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to clear cart");

      console.log("Cart cleared on backend");
      return true;
    } catch (err) {
      console.error("Clear cart failed:", err);
      return false;
    }
  }

  async function handleClearCart() {
    const success = await clearCart();
    if (success) {
      setCartItems([]);
      setCartItemslen(0);
    } else {
      alert("Could not clear cart. Try again later!");
    }
  }

  return (
    <>
      <button type="button" className="btn clearcart" onClick={handleClearCart}>
        Clear Cart
      </button>

      <div className="cartItemDiv">
        {cartitems_Count.map((itemInfo) => (
          <CartItem
            key={itemInfo.id}
            itemInfo={itemInfo.item}
            count={itemInfo.amount}
          />
        ))}
      </div>
    </>
  );
};
