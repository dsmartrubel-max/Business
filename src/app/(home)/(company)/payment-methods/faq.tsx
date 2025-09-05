import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function EMIFAQ() {
    const faqs = [
        {
            question: "What is DFCL 0% Equal Monthly Installments (EMI)?",
            answer: "DFCL EMI is a service that allows you to purchase items through a deferred payment plan using your credit card. The full outstanding payment will be blocked on your account until the instalments have been completed. The blocked amount will also be visible on your statement.",
        },
        {
            question:
                "Is there any mark-up, processing fees or down payment on DFCL EMI?",
            answer: "EMI does not have any mark-up, down payment or any other hidden cost attached to it.",
        },
        {
            question:
                "Is DFCL 0% EMI available on all products and how does it work?",
            answer: `<p>DFCL 0% EMI is available on all DFCL service or products, subject to </p><p>  i) The product paid price must be BDT 10,000/- or more</p><p>  ii) 0% EMI is applicable on each individual service or products, not on total cart value. You can use the EMI Calculator to see your monthly repayments. Once a purchase is completed through using Credit Card, just call DFCL customer Care number to inform that you want to take EMI facility for your order. After successful service or product delivery DFCL team will send a rider with required bank EMI form to get it filled up by the cardholder. It will take up to 7-10 working days for the installment to reflect on your credit card statement.</p>`,
        },
        {
            question: "Are there any conditions for the EMI to be approved?",
            answer: "<p>DFCL 0% EMI is available on all DFCL service or products, subject to</p><p>  i) the service or product paid price must be BDT 10,000/- or more</p><p>  ii) 0% EMI is applicable on each individual service or products, not on total cart value.</p>",
        },
        {
            question:
                "Is it possible to return or cancel products purchased on DFCL EMI?",
            answer: "Yes, in case of return, your money will be reversed on your credit card within 12-15 working days. There are no charges for this reversal and it will be reflected on your subsequent statement. Please note, reversals on your credit card is the only refund payment method available for items purchased using DFCL 0% EMI and subsequently returned or canceled.",
        },
        {
            question:
                "Is it possible to convert a partial amount of my order onto the EMI plan?",
            answer: "Unfortunately, only full cart values can be converted into an EMI plan.",
        },
        {
            question:
                "I want to buy a product using DFCL 0% EMI but I do not have any sort of cards to use , what should I do?",
            answer: "Unfortunately, DFCL 0% EMI plan is only available for certain bank partners for now. As soon as DFCL offers 0% EMI for other Banks; it will get updated it in the website.",
        },
        {
            question:
                "What if your EMI plan has not been activated after 7working days of purchase?",
            answer: "Please call the Bank&apos;s helpline to escalate the matter. If you have been charged any financial fees due to this, they will be reversed in your subsequent statement.",
        },
        {
            question: "How to avail 0% EMI facility on DFCL?",
            answer: "Call DFCL helpline (09613828000) to convert your purchase into EMI. Currently EMI facility is available only for Dhaka city.",
        },
    ];
    return (
        <section className="grid gap-6">
            <h2 className="font-cal text-xl md:text-2xl lg:text-3xl text-center">
                Frequently Asked Questions
            </h2>
            <Accordion
                type="single"
                collapsible
                className="rounded-lg w-full bg-primary text-primary-foreground"
            >
                {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                        <AccordionTrigger className=" px-4 text-sm">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="bg-secondary text-secondary-foreground px-5 py-4">
                            <div
                                className="flex flex-col gap-2"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            ></div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
