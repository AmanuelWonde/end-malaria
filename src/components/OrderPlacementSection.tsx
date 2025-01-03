import OrderPlacementForm from "./forms/OrderPlacementForm";

const OrderPlacementSection = () => {
  return (
    <div
      className=" w-[80%] flex flex-col items-center mx-auto"
      id="place-order"
    >
      <h1 className=" text-3xl text-primary font-bold ">ምርታችንን ይዘዙ</h1>
      <OrderPlacementForm />
    </div>
  );
};

export default OrderPlacementSection;
