import { createFileRoute } from "@tanstack/react-router";
import term1 from "../assets/term1.png";  

export const Route = createFileRoute("/term")({
	component: TermComponent,
});

function TermComponent() {
	return (
		<div className="h-screen bg-white pb-10 md:my-0 mt-0">
			<div className="w-full relative mx-7 pt-40 max-sm:pt-20">
				<h1 className="text-black font-bold text-3xl">Terms & Conditions</h1>
        <div className="flex flex-row max-sm:flex-col">
            <img src={term1} alt="Terms and Conditions" className="w-[300px]" />
          
        </div>
			</div>
		</div>
	);
}
