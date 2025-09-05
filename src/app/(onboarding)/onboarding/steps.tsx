/* This example requires Tailwind CSS v2.0+ */
import { Check } from "lucide-react";

export default function Steps({
    steps,
    currentStep,
    setCurrentStep,
}: {
    steps: any[];
    currentStep: number;
    setCurrentStep: any;
}) {
    return (
        <nav aria-label="Progress" className="bg-white">
            <ol
                role="list"
                className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
            >
                {steps.map((step) => (
                    <li
                        onClick={() => setCurrentStep(step.id)}
                        key={step.id}
                        className="relative md:flex-1 md:flex"
                    >
                        <a
                            href={step.href}
                            className="group flex items-center w-full"
                        >
                            <span className="px-6 py-4 flex items-center text-sm font-medium">
                                <span
                                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center ${
                                        step.id < currentStep &&
                                        "bg-indigo-600 group-hover:bg-indigo-800"
                                    } rounded-full `}
                                >
                                    {step.id >= currentStep ? (
                                        <span
                                            className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 ${
                                                step.id > currentStep
                                                    ? "border-gray-300 group-hover:border-gray-400"
                                                    : step.id === currentStep &&
                                                      "border-indigo-600 "
                                            } rounded-full`}
                                        >
                                            <span className="">
                                                {step.id > currentStep}
                                                {step.id + 1}
                                            </span>
                                        </span>
                                    ) : (
                                        <Check
                                            className="w-6 h-6 text-white"
                                            aria-hidden="true"
                                        />
                                    )}
                                </span>
                                <span className="md:whitespace-nowrap ml-4 text-sm font-medium text-gray-900">
                                    {step.name}
                                </span>
                            </span>
                        </a>

                        {step.id !== steps.length - 1 ? (
                            <>
                                {/* Arrow separator for lg screens and up */}
                                <div
                                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="h-full w-full text-gray-300"
                                        viewBox="0 0 22 80"
                                        fill="none"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0 -2L20 40L0 82"
                                            vectorEffect="non-scaling-stroke"
                                            stroke="currentcolor"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

{
    /* <li key={step.name} className="relative md:flex-1 md:flex">
    {step.status === "complete" ? (
        <a href={step.href} className="group flex items-center w-full">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                    <Check className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
                <span className="md:whitespace-nowrap ml-4 text-sm font-medium text-gray-900">
                    {step.name}
                </span>
            </span>
        </a>
    ) : step.status === "current" ? (
        <a
            href={step.href}
            className="px-6 py-4 flex items-center text-sm font-medium"
            aria-current="step"
        >
            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                <span className="text-indigo-600">{step.id}</span>
            </span>
            <span className="md:whitespace-nowrap ml-4 text-sm font-medium text-gray-900">
                {step.name}
            </span>
        </a>
    ) : (
        <a href={step.href} className="group flex items-center">
            <span className="px-6 py-4 flex items-center text-sm font-medium">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                    </span>
                </span>
                <span className="md:whitespace-nowrap ml-4 text-sm font-medium text-gray-900">
                    {step.name}
                </span>
            </span>
        </a>
    )}

    {stepIdx !== steps.length - 1 ? (
        <>
            {/* Arrow separator for lg screens and up */
}
//             <div
//                 className="hidden md:block absolute top-0 right-0 h-full w-5"
//                 aria-hidden="true"
//             >
//                 <svg
//                     className="h-full w-full text-gray-300"
//                     viewBox="0 0 22 80"
//                     fill="none"
//                     preserveAspectRatio="none"
//                 >
//                     <path
//                         d="M0 -2L20 40L0 82"
//                         vectorEffect="non-scaling-stroke"
//                         stroke="currentcolor"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             </div>
//         </>
//     ) : null}
// </li>; */}
