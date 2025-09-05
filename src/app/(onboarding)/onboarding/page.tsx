"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Steps from "./steps";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PersonalInfo from "./personal";
import CompanyInfo from "./company";
import NomineeInfo from "./nominee";
const steps = [
    { id: 0, name: "Personal Information", href: "#", status: "complete" },
    { id: 1, name: "Business Information", href: "#", status: "current" },
    { id: 2, name: "Nominee", href: "#", status: "upcoming" },
];

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Complete Registration</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                        <Steps
                            steps={steps}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                        {currentStep === 0 && <PersonalInfo />}
                        {currentStep === 1 && <CompanyInfo />}
                        {currentStep === 2 && <NomineeInfo />}
                        <div className="flex justify-between">
                            {currentStep > 0 ? (
                                <Button
                                    onClick={() =>
                                        setCurrentStep(
                                            (currentStep) => currentStep - 1
                                        )
                                    }
                                >
                                    Previous
                                </Button>
                            ) : (
                                <div></div>
                            )}
                            {currentStep < steps.length - 1 && (
                                <Button
                                    onClick={() =>
                                        setCurrentStep(
                                            (currentStep) => currentStep + 1
                                        )
                                    }
                                >
                                    Next
                                </Button>
                            )}
                            {currentStep == steps.length - 1 && (
                                <Button>Submit</Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
