import { createFileRoute } from "@tanstack/react-router";
import donation1 from "../assets/donations1.png";
import donation2 from "../assets/donations2.png";

export const Route = createFileRoute("/donation")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full text-black bg-white pb-15 pt-40 md:my-0 mt-0 text-black ">
			<div className="flex flex-row items-start justify-center gap-30 flex-wrap w-full">
				<div className="space-y-12 w-full lg:w-1/2 max-sm:space-y-10">
					<h1 className="text-4xl font-bold text-center max-sm:text-3xl">
						Make an Impact with Your <br /> Donation
					</h1>
					<img className="place-self-center lg:hidden" src={donation1} alt="" />
					<p className="text-2xl text-center max-sm:text-lg max-sm:text-start">
						Your support helps extend the life of clothing, reduce waste, and
						promote sustainable fashion. Every contribution goes towards
						initiatives that encourage recycling, responsible consumption, and
						community-driven solutions for a greener future. Together, we can
						make fashion a force for good!
					</p>
					<button
						type="submit"
						className="bg-[#FFD8BE] place-self-start justify-center rounded-full font-bold text-lg flex w-1/4 px-3 py-2 text-sm  text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-full max-sm:place-self-center"
					>
						Contact Us
					</button>
				</div>

				<div className="max-lg:hidden">
					<img className="h-full" src={donation1} alt="" />
				</div>
			</div>
			<div className="space-y-5">
				<h1 className="text-5xl font-bold text-center mt-40">
					Bagaimana Alur Donasi?
				</h1>
				<p className="text-lg text-center max-sm:text-lg max-sm:text-start">
					Donasikan pakaian dengan mudah! Hubungi kami, tim akan menjemput,
					menyortir, dan <br /> menyalurkan atau mendaur ulang pakaian untuk
					keberlanjutan yang lebih baik.
				</p>
				<div className="flex flex-row">
					<div className="flex flex-col justify-center rounded-3xl shadow-xl bg-white z-10 w-[20%] pb-5 ">
						<img src={donation2} alt="maskot5" className="w-full" />
						<h2 className="text-2xl font-bold pt-5">Hubungi Kami</h2>
						<p className="pt-5">
            Kirimkan kontak Anda, tim kami akan mengatur penjemputan pakaian donasi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
