import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutFrom from "./CheckOutFrom";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

//TODO: please here to provide the publisibale key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Geteway_token);


const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=>sum+item.price,0)
    const price  = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading='Please Process' heading='payment'></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutFrom cart={cart}  price={price}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;