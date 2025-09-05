import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function BOD() {
    const data = [
        {
            name: "Akhi Alam Talukdar",
            designation: "Chairman",
            image: "/images/people/chairman.png",
            short_message: `"I am delighted to share that DFCL has achieved
                        significant milestones in the past year. We have
                        successfully completed a number of key projects,
                        expanded our client base, and grown our team.
                        Thanks."`,
            full_message: `  <p>
                                I am delighted to share that DFCL has
                                achieved significant milestones in the
                                past year. We have successfully
                                completed a number of key projects,
                                expanded our client base, and grown our
                                team. Our success is a testament to the
                                hard work and dedication of our
                                employees.
                                <p/>
                                <p>
                                I am incredibly grateful for their
                                commitment to our company and our
                                clients. We are committed to continuing
                                to provide our clients with the highest
                                quality of service. We are also
                                committed to investing in our people and
                                our technology. I am confident that DFCL
                                has a bright future ahead of us. We are
                                well-positioned to capitalize on the
                                opportunities that lie ahead. I look
                                forward to continuing to lead DFCL to
                                success in the years to come.
                            </p>
                            <p>
                                Sincerely,
                                <br />
                                AKHI ALAM TALUKDER
                                <br />
                                dSmart Finger Communication Ltd.
                                <br /> Chairman
                            </p>`,
        },
        {
            name: "Zahidul Alam Rubel",
            designation: "Managing Director",
            image: "/images/people/md.png",
            short_message: `"Our valuable clients are the main asset of our
                            company. Our wise clients are the mirror of our
                            company. We respectfully analysis the feedback from
                            our client. 'Professionalism' is the key
                            work for success to us."`,
            full_message: `<p>
                                Our valuable clients are the main
                                asset of our company. Our wise
                                clients are the mirror of our
                                company. We respectfully analysis
                                the feedback from our client.
                                'Professionalism' is the
                                key work for success to us. We at
                                DFCL are determined to play a
                                leading role in the development of
                                the Handyman and Information
                                Technology Services Sector. Over the
                                past seven years we have worked
                                towards building a strong foundation
                                and establishing a professional
                                corporate identity for our company.
                                Today, in the field of Handyman and
                                Information Technology DFCL is
                                recognized leader, respected for its
                                achievements, professional ethics
                                and innovative concepts.
                                <p/>
                                <p>
                                Our corporate philosophy is however
                                based on a very simple principle
                                &quot;Give the customer value for
                                money&quot;. To this end, we are
                                constantly working towards upgrading
                                and improving every aspect of our
                                activity. Be it the quality of our
                                Handyman and Information Technology
                                or our after-sales service, the
                                emphasis is to keep on improving. It
                                is because of this unrelenting quest
                                for excellence that we have earned
                                the goodwill of so many of our
                                customers.
                                </p>
                                <p> Today DFCL is poised for a
                                new phase of dynamic growth. Our
                                human resource is well trained and
                                motivated; our financial
                                Fundamentals are strong, and we have
                                an excellent goodwill in the market.
                                Our vision is to constantly set
                                challenging goals for ourselves. We
                                will continue to expand and
                                diversify and be an example of a
                                progressive company playing a
                                dynamic role in the economic
                                development of Bangladesh.
                            </p>
                            <p>
                                Sincerely,
                                <br />
                                ZAHIDUL ALAM RUBEL
                                <br />
                                dSmart Finger Communication Ltd.
                                <br /> Managing Director
                            </p>`,
        },
    ];

    return (
        <section className="bg-white w-full">
            <h2 className="uppercase text-center text-2xl md:text-3xl lg:text-4xl font-cal">
                Board of Director
            </h2>
            <div className="max-w-7xl w-full mx-auto mt-6 md:mt-8 ">
                <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 col-start-2 gap-2 md:gap-4 lg:gap-6">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            className="lg:first:col-start-2 border-2 hover:border-primary group bg-primary text-primary-foreground hover:shadow-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                        >
                            <CardHeader className="p-3 md:p-6 flex flex-col gap-4 items-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    height="500"
                                    width="500"
                                    className="object-cover w-full rounded-md"
                                />
                                <CardTitle className="flex flex-col text-center">
                                    <span className="text-sm md:text-lg whitespace-nowrap">
                                        {item.name}
                                    </span>
                                    <span className="text-sm md:text-md">
                                        {item.designation}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                                <div className="text-sm line-clamp-3">
                                    {item.short_message}
                                </div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="w-full flex justify-center">
                                            <Button
                                                variant="secondary"
                                                className="mt-4 block group-hover:bg-primary group-hover:text-primary-foreground"
                                            >
                                                See Full Message
                                            </Button>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="">
                                        <DialogHeader>
                                            <div className="w-full flex justify-center">
                                                <Avatar className="size-24">
                                                    <AvatarImage
                                                        src={item.image}
                                                        className="size-24"
                                                    />
                                                    <AvatarFallback>
                                                        A
                                                    </AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </DialogHeader>
                                        <div
                                            className="prose text-sm max-h-[400px] overflow-y-scroll"
                                            dangerouslySetInnerHTML={{
                                                __html: item.full_message,
                                            }}
                                        ></div>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>
                    ))}

                    {/* <Card className="border-2 hover:border-primary group bg-primary text-primary-foreground hover:shadow-lg hover:scale-105 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                        <CardHeader className="flex flex-col gap-4 items-center">
                            <Image
                                src="/images/people/md.png"
                                alt="Managing Director"
                                height="500"
                                width="500"
                                className="object-cover w-full rounded-md"
                            />
                            <CardTitle className=" text-center">
                                Zahidul Alam Rubel
                                <br />
                                <span className="text-lg md:text-xl">
                                    Managing Director
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            &quot;Our valuable clients are the main asset of our
                            company. Our wise clients are the mirror of our
                            company. We respectfully analysis the feedback from
                            our client. &apos;Professionalism&apos; is the key
                            work for success to us.&quot;
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="w-full flex justify-center">
                                        <Button
                                            variant="secondary"
                                            className="block mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
                                        >
                                            See Full Message
                                        </Button>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="">
                                    <DialogHeader>
                                        <div className="w-full flex justify-center">
                                            <Avatar className="size-24">
                                                <AvatarImage
                                                    src="/images/people/md.png"
                                                    className="size-24"
                                                />
                                                <AvatarFallback>
                                                    A
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </DialogHeader>
                                    <div className="prose max-h-[400px] overflow-y-scroll">
                                        <p>
                                            Our valuable clients are the main
                                            asset of our company. Our wise
                                            clients are the mirror of our
                                            company. We respectfully analysis
                                            the feedback from our client.
                                            &apos;Professionalism&apos; is the
                                            key work for success to us. We at
                                            DFCL are determined to play a
                                            leading role in the development of
                                            the Handyman and Information
                                            Technology Services Sector. Over the
                                            past seven years we have worked
                                            towards building a strong foundation
                                            and establishing a professional
                                            corporate identity for our company.
                                            Today, in the field of Handyman and
                                            Information Technology DFCL is
                                            recognized leader, respected for its
                                            achievements, professional ethics
                                            and innovative concepts.
                                            <br />
                                            Our corporate philosophy is however
                                            based on a very simple principle
                                            &quot;Give the customer value for
                                            money&quot;. To this end, we are
                                            constantly working towards upgrading
                                            and improving every aspect of our
                                            activity. Be it the quality of our
                                            Handyman and Information Technology
                                            or our after-sales service, the
                                            emphasis is to keep on improving. It
                                            is because of this unrelenting quest
                                            for excellence that we have earned
                                            the goodwill of so many of our
                                            customers.
                                            <br /> Today DFCL is poised for a
                                            new phase of dynamic growth. Our
                                            human resource is well trained and
                                            motivated; our financial
                                            Fundamentals are strong, and we have
                                            an excellent goodwill in the market.
                                            Our vision is to constantly set
                                            challenging goals for ourselves. We
                                            will continue to expand and
                                            diversify and be an example of a
                                            progressive company playing a
                                            dynamic role in the economic
                                            development of Bangladesh.
                                        </p>
                                        <p>
                                            Sincerely,
                                            <br />
                                            ZAHIDUL ALAM RUBEL
                                            <br />
                                            dSmart Finger Communication Ltd.
                                            <br /> Managing Director
                                        </p>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card> */}
                </div>
            </div>
        </section>
    );
}
