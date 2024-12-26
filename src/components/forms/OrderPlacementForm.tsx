import prodcutImage from "../../../public/Group 1000003405.png";
import Button from "../ui/Button";
import Input from "../ui/Input";
const OrderPlacementForm = () => {
  return (
    <form className=" space-y-8">
      <div>
        <p>Item Image</p>
        <img src={prodcutImage} alt="" />
      </div>

      <div className=" space-y-6">
        <div className=" md:flex gap-6 space-y-6 md:space-y-0">
          <Input lable="Item ID" placeHolder="#On12345" />
          <Input lable="Order Amount" placeHolder="200" />
        </div>

        <div className=" md:flex gap-6 space-y-6 md:space-y-0">
          <Input required={true} lable="Unit" placeHolder="Number" />
          <Input lable="Price per Unit " placeHolder="250" />
        </div>
        <div className=" md:flex gap-6 space-y-6 md:space-y-0">
          <Input required={true} lable="Region" placeHolder="Afar" />
          <Input lable="City " placeHolder="Asaya" />
        </div>
        <Input required={true} lable="Woreda" placeHolder="Zuru" />
        <Input lable="Total Price " placeHolder="" />
        <div className="flex gap-6 w-40 mx-auto ">
          <Button
            type="reset"
            className=" bg-gray-700 border-2 border-primary  rounded-xl"
          >
            Cancel
          </Button>
          <Button type="submit" className=" border-2 border-primary rounded-xl">
            Order
          </Button>
        </div>
      </div>
    </form>
  );
};

export default OrderPlacementForm;
