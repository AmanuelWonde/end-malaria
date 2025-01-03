import { useState } from "react";
import prodcutImage from "../../../public/Group 1000003405.png";
import Input from "../ui/Input";
import axios from "axios";

interface OrderDetail {
  amount: number;
  region: string;
  city: string;
  woreda: string;
  phoneNumber: string;
  totalPrice: number;
}
interface CheckoutResponse {
  message: string;
  status: string;
  data: {
    checkout_url: string;
  };
}

const OrderPlacementForm = () => {
  const [orderDetail, setOrderDetail] = useState<OrderDetail>(
    {} as OrderDetail
  );
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = () => {
    const errorList = [];
    if (!orderDetail.amount) errorList.push("Order Amount is required.");
    if (!orderDetail.region) errorList.push("Region is required.");
    if (!orderDetail.city) errorList.push("City is required.");
    if (!orderDetail.woreda) errorList.push("Woreda is required.");
    if (!orderDetail.phoneNumber) errorList.push("Phone number is required.");
    setErrors(errorList);

    return errorList.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const body = JSON.stringify({
        amount: orderDetail.totalPrice,
        currency: "ETB",
        phone_number: orderDetail.phoneNumber,
        tx_ref: new Date().getTime + "reference",
        return_url: "https://end-malaria.vercel.app",
      });

      const res = await axios.post<CheckoutResponse>(
        "https://api.chapa.co/v1/transaction/initialize",
        body,
        {
          headers: {
            Authorization: `Bearer `,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.status === "success")
        return (window.location.href = `${res.data.data.checkout_url}`);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <p>የእቃው ምስል</p>
        <img src={prodcutImage} alt="Product" />
      </div>

      <div className="space-y-6">
        <div className="md:flex gap-6 space-y-6 md:space-y-0">
          <Input
            lable="የእቃው መለያመለያ"
            placeHolder="#On12345"
            value="#On12345"
            disabled
          />
          <Input
            lable="የትእዛዝ ብዛት"
            placeHolder="200"
            type="number"
            onChange={(e) =>
              setOrderDetail({
                ...orderDetail,
                totalPrice: parseInt(e.target.value) * 250,
                amount: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div className="md:flex gap-6 space-y-6 md:space-y-0">
          <Input
            required={true}
            lable="መለኪያ"
            placeHolder="ቁጥር"
            value="ቁጥር"
            disabled
          />
          <Input
            lable="የእያንዳንዱ ዋጋ"
            placeHolder="250"
            value="250 ETB"
            disabled
          />
        </div>
        <div className="md:flex gap-6 space-y-6 md:space-y-0">
          <Input
            required={true}
            lable="ክልል"
            placeHolder="አፋር"
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, region: e.target.value })
            }
          />
          <Input
            lable="ከተማ"
            placeHolder="አሳያ"
            required
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, city: e.target.value })
            }
          />
        </div>
        <div className="md:flex gap-6 space-y-6 md:space-y-0">
          <Input
            required={true}
            lable="ወረዳ"
            placeHolder="ዙሩ"
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, woreda: e.target.value })
            }
          />
          <Input
            lable="ስልክ ቁጥር"
            placeHolder="09********45"
            required
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, phoneNumber: e.target.value })
            }
          />
        </div>
        <Input
          lable="ጠቅላላ ዋጋ"
          placeHolder="0.0"
          value={orderDetail?.totalPrice}
          disabled
          name="amount"
        />
        <div className="text-red-600">
          {errors.length > 0 && (
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-6 w-40 mx-auto ">
          <button
            type="reset"
            className="bg-gray-300 font-bold w-40 px-4 py-2 border-2 text-primary border-primary rounded-xl"
          >
            ይመለሱ
          </button>
          <button
            type="submit"
            className="w-40 bg-primary text-white px-4 py-2 border-2 border-primary rounded-xl"
          >
            ይዘዙ
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderPlacementForm;
