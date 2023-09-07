import { PaymentSession } from "@medusajs/medusa"
import Radio from "@modules/common/components/radio"
import clsx from "clsx"
import React from "react"
import PaymentStripe from "../payment-stripe"
import PaymentTest from "../payment-test"

type PaymentContainerProps = {
  paymentSession: PaymentSession
  selected: boolean
  setSelected: () => void
  disabled?: boolean
}


interface RequestPayAdditionalParams {
  digital?: boolean
  vbank_due?: string
  m_redirect_url?: string
  app_scheme?: string
  biz_num?: string
}

interface Display {
  card_quota?: number[]
}

interface RequestPayParams extends RequestPayAdditionalParams {
  pg?: string
  pay_method: string
  escrow?: boolean
  merchant_uid: string
  name?: string
  amount: number
  custom_data?: any
  tax_free?: number
  currency?: string
  language?: string
  buyer_name?: string
  buyer_tel: string
  buyer_email?: string
  buyer_addr?: string
  buyer_postcode?: string
  notice_url?: string | string[]
  display?: Display
}
interface RequestPayAdditionalResponse {
  apply_num?: string
  vbank_num?: string
  vbank_name?: string
  vbank_holder?: string | null
  vbank_date?: number
}

interface RequestPayResponse extends RequestPayAdditionalResponse {
  success: boolean
  error_code: string
  error_msg: string
  imp_uid: string | null
  merchant_uid: string
  pay_method?: string
  paid_amount?: number
  status?: string
  name?: string
  pg_provider?: string
  pg_tid?: string
  buyer_name?: string
  buyer_email?: string
  buyer_tel?: string
  buyer_addr?: string
  buyer_postcode?: string
  custom_data?: any
  paid_at?: number
  receipt_url?: string
}

type RequestPayResponseCallback = (response: RequestPayResponse) => void

interface Iamport {
  init: (accountID: string) => void
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void
}

declare global {
interface Window {
  IMP?: Iamport
}
}

const PaymentInfoMap: Record<string, { title: string; description: string }> = {
  stripe: {
    title: "Credit card",
    description: "Secure payment with credit card",
  },
  "stripe-ideal": {
    title: "iDEAL",
    description: "Secure payment with iDEAL",
  },
  paypal: {
    title: "PayPal",
    description: "Secure payment with PayPal",
  },
  manual: {
    title: "Test payment",
    description: "Test payment using medusa-payment-manual",
  },
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selected,
  setSelected,
  disabled = false,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0",
        {
          "bg-gray-50": selected,
        }
      )}
    >
      <button
        className={"grid grid-cols-[12px_1fr] gap-x-4 py-4 px-8"}
        onClick={setSelected}
        disabled={disabled}
      >
        <Radio checked={selected} />
        <div className="flex flex-col text-left">
          <h3 className="text-base-semi leading-none text-gray-900">
            {PaymentInfoMap[paymentSession.provider_id].title}
          </h3>
          <span className="text-gray-700 text-small-regular mt-2">
            {PaymentInfoMap[paymentSession.provider_id].description}
          </span>
          {selected && (
            <div className="w-full mt-4">
              <PaymentElement paymentSession={paymentSession} />
            </div>
          )}
        </div>
      </button>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  )
}

const PaymentElement = ({
  paymentSession,
}: {
  paymentSession: PaymentSession
}) => {
  switch (paymentSession.provider_id) {
    case "stripe":
      return (
        <div className="pt-8 pr-7">
          <PaymentStripe />
        </div>
      )
    case "manual":
      // We only display the test payment form if we are in a development environment
      return process.env.NODE_ENV === "development" ? <PaymentTest /> : null
    default:
      return null
  }
}

const onClickPayment = () => {
  if (!window.IMP) return;
  /* 1. 가맹점 식별하기 */
  const { IMP } = window;
  IMP.init("imp71684470"); // 가맹점 식별코드

  IMP.request_pay({ // param
    pg: "html5_inicis",
    pay_method: "card",
    merchant_uid: "ORD20180131-0000011",
    name: "노르웨이 회전 의자",
    amount: 64900,
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181"
  }, rsp => { // callback
    console.log("rsp", rsp);
  }
  )}




export default PaymentContainer
