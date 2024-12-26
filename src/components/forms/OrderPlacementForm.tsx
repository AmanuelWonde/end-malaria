import { useState } from "react";
import prodcutImage from "../../../public/Group 1000003405.png";
import Input from "../ui/Input";
const OrderPlacementForm = () => {
  const [totalPrice, setTotalPrice] = useState(0.0);
  return (
    <form className=" space-y-8">
      <div>
        <p>Item Image</p>
        <img src={prodcutImage} alt="" />
      </div>

      <div className=" space-y-6">
        <div className=" md:flex gap-6 space-y-6 md:space-y-0">
          <Input
            lable="Item ID"
            placeHolder="#On12345"
            value="#On12345"
            disabled
          />
          <Input
            lable="Order Amount"
            placeHolder="200"
            type="number"
            onChange={(e) => setTotalPrice(parseInt(e.target.value) * 250)}
          />
        </div>

        <div className=" md:flex gap-6 space-y-6 md:space-y-0">
          <Input
            required={true}
            lable="Unit"
            placeHolder="Number"
            value="Number"
            disabled
          />
          <Input
            lable="Price per Unit "
            placeHolder="250"
            value="250"
            disabled
          />
        </div>
        <div className=" md:flex gap-6 space-y-6 md:space-y-0">
          <Input required={true} lable="Region" placeHolder="Afar" />
          <Input lable="City " placeHolder="Asaya" />
        </div>
        <Input required={true} lable="Woreda" placeHolder="Zuru" />
        <Input lable="Total Price " placeHolder="" value={totalPrice} />
        <div className="flex gap-6 w-40 mx-auto ">
          <button
            type="reset"
            className=" bg-gray-300 font-bold w-40 px-4 py-2 border-2 text-primary border-primary  rounded-xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" w-40 bg-primary text-white px-4 py-2 border-2 border-primary rounded-xl"
          >
            Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderPlacementForm;
