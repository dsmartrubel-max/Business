import PageTitle from "@/components/reusable/pageTitle";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Blend,
    Diamond,
    Gem,
    MessageCircleMore,
    Podcast,
    Rocket,
} from "lucide-react";
import { Metadata } from "next";
import AboutMenu from "../menu";
import AboutContainer from "../container";

export const metadata: Metadata = {
    title: "Code of Conduct | DFCL's Professional Ethics and Standards",
    description:
        " Learn about DFCL's code of conduct and business ethics, ensuring the quality and trustworthiness of our services.",
    keywords:
        "DFCL code of conduct, professional ethics, business policies, quality standards",
};

export default function CodeOfConductPage() {
    const principles = [
        {
            icon: <Gem className="size-16 text-center" />,
            title: "Code Principles",
            description:
                "We play by the rules. We follow laws, regulations and our policies and, if these are in conflict, we uphold the highest standard.",
        },

        {
            icon: <MessageCircleMore className="size-16 text-center" />,
            title: "Accountable",
            description:
                "We actively seek information, understand our responsibilities.",
        },

        {
            icon: <Blend className="size-16 text-center" />,
            title: "Transparent",
            description:
                "We are transparent and honest. We are open and truthful about our challenges.",
        },

        {
            icon: <Podcast className="size-16 text-center" />,
            title: "Speak Up",
            description:
                "We speak up. We ask questions when in doubt and raise concerns without concern of retaliation.",
        },
    ];
    return (
        <AboutContainer title="Code Of Conduct">
            <div className="w-full max-w-7xl mx-auto md:text-md xl:text-lg text-justify gap-4 grid md:gap-6 ">
                <p>
                    At dSmart Finger Communication Ltd. (DFCL) high performance
                    is not only about exceeding our goals and targets. It is
                    also about how we behave towards each other and the world
                    around us. We want to be a trusted partner - to our
                    customers, shareholders and colleagues, and to our business
                    partners and the communities where we operate. Our business
                    depends on this trust, and we are committed to conducting
                    our business in a responsible, ethical and lawful manner.
                </p>
                <p>
                    The Code of Conduct is the foundation of our corporate
                    culture and sets out high standards of integrity on how we
                    do business. Our Code guides us through day-to-day dilemmas
                    and is the basis for how we behave as guardians of dSmart
                    Finger Communication Ltd.&apos;s (DFCL) integrity. It helps
                    us make informed decisions and explains where to go for more
                    information and guidance.
                </p>
                <p>
                    The four Code Principles and specific requirements contained
                    in the Code Sections form our basic obligations. Additional
                    requirements in our Policies and Manuals must also be
                    understood and followed.
                </p>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {principles.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-primary text-primary-foreground border-2 border-primary hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                        >
                            <CardHeader className="flex flex-col gap-4 items-center">
                                {item.icon}
                                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-cal text-center">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-sm text-center">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <p>
                    Our Code of Conduct applies to all employees and everyone
                    acting on behalf of dSmart Finger Communication Ltd. (DFCL),
                    including the Board of Directors. We expect our vendors,
                    suppliers, contractors and other business partners to commit
                    and uphold the same high ethical standards that we follow.
                    All dSmart Finger Communication Ltd. (DFCL) employees are
                    required to conduct eLearning and sign off on the Code of
                    Conduct on an annual basis.
                </p>
                <p>
                    At dSmart Finger Communication Ltd. (DFCL) we maintain a
                    culture in which employees feel comfortable raising concerns
                    and potential violations of the Code of Conduct. We prohibit
                    retaliation against any employee at dSmart Finger
                    Communication Ltd. (DFCL) who reports in good faith. Through
                    reporting we enable dSmart Finger Communication Ltd. (DFCL)
                    to keep its promise to operate legally and ethically and we
                    help the company to protect its good reputation.
                </p>
            </div>
        </AboutContainer>
    );
}
