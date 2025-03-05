import { createFileRoute } from "@tanstack/react-router";
import donation1 from "../assets/donations1.png";
import donation2 from "../assets/donations2.png";
import donation3 from "../assets/donations3.png";
import donation4 from "../assets/donations4.png";
import quoteleft from "../assets/quoteleft.svg";
import quoteright from "../assets/quoteright.svg";

export const Route = createFileRoute("/donation")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full text-black bg-white pb-15 pt-40 md:my-0 mt-0 text-black max-sm:pt-20">
			<div className="flex flex-row items-start justify-center gap-30 flex-wrap w-full">
				<div className="space-y-12 w-full lg:w-1/2 max-sm:space-y-10">
					<h1 className="text-4xl font-bold text-center max-sm:text-3xl">
						Make an Impact with Your <br /> Donation
					</h1>
					<img className="place-self-center lg:hidden" src={donation1} alt="" />
					<p className="text-2xl text-center max-sm:text-lg max-sm:text-start max-sm:ps-5 max-sm:pe-5">
						Your support helps extend the life of clothing, reduce waste, and
						promote sustainable fashion. Every contribution goes towards
						initiatives that encourage recycling, responsible consumption, and
						community-driven solutions for a greener future. Together, we can
						make fashion a force for good!
					</p>
					<button
						type="submit"
						className="bg-[#FFD8BE] place-self-start justify-center rounded-full font-bold text-lg flex w-1/4 px-3 py-2 text-sm md:ms-7 text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-sm:w-2/3 max-sm:place-self-center "
					>
						Contact Us
					</button>
				</div>

				<div className="max-lg:hidden">
					<img className="h-full" src={donation1} alt="" />
				</div>
			</div>
			<div className="space-y-5">
				<h1 className="text-5xl font-bold text-center mt-40 max-sm:mt-15 max-sm:text-3xl">
					Bagaimana Alur Donasi?
				</h1>
				<p className="text-lg text-center max-sm:text-lg max-sm:text-start max-sm:ps-5">
					Donasikan pakaian dengan mudah! Hubungi kami, tim akan menjemput,
					menyortir, dan <br /> menyalurkan atau mendaur ulang pakaian untuk
					keberlanjutan yang lebih baik.
				</p>
				<div className="flex flex-row flex-wrap justify-around max-sm:flex-col max-sm:items-center max-sm:gap-y-10">
					<div className="flex flex-col justify-center rounded-3xl bg-white z-10 w-[20%] max-sm:w-2/3">
						<img src={donation2} alt="maskot5" className="w-full" />
						<div className="bg-[#D2D2D2] p-0 m-0 rounded-sm text-center pb-10">
							<h2 className="text-2xl font-bold pt-5">Hubungi Kami</h2>
							<p className="pt-5">
								Kirimkan kontak Anda, tim kami akan mengatur penjemputan pakaian
								donasi.
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center rounded-3xl bg-white z-10 w-[20%] max-sm:w-2/3">
						<img src={donation3} alt="maskot5" className="w-full" />
						<div className="bg-[#D2D2D2] p-0 m-0 rounded-sm text-center pb-10">
							<h2 className="text-2xl font-bold pt-5">Hubungi Kami</h2>
							<p className="pt-5">
								Kirimkan kontak Anda, tim kami akan mengatur penjemputan pakaian
								donasi.
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center rounded-3xl bg-white z-10 w-[20%] max-sm:w-2/3">
						<img src={donation4} alt="maskot5" className="w-full" />
						<div className="bg-[#D2D2D2] p-0 m-0 rounded-sm text-center pb-10">
							<h2 className="text-2xl font-bold pt-5">Hubungi Kami</h2>
							<p className="pt-5">
								Kirimkan kontak Anda, tim kami akan mengatur penjemputan pakaian
								donasi.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full bg-[#D2D2D2] mt-40 pb-25 max-sm:pb-10 max-sm:ps-5 max-sm:pe-5">
				<h1 className="font-bold text-5xl text-center pt-10 max-sm:text-3xl max-sm:pt-10">
					Thankful Hearts
				</h1>
				<div className="flex flex-row justify-around gap-10 mt-20 max-sm:flex-col max-sm:mt-10">
					<div className="bg-white w-[25%] h-1/4 space-y-1  text-[#6F594A] max-sm:w-full">
						<img src={quoteleft} className="place-self-start"alt="" />
						<blockquote className="text-center">
							Pakaian yang saya terima masih sangat bagus dan nyaman dipakai.
							Terima kasih kepada semua yang telah berdonasi, ini sangat
							membantu!
						</blockquote>
						<blockquote className="text-center">
							— Aisyah, 24 - Mahasiswa
						</blockquote>
						<img src={quoteright} className="place-self-end" alt="" />
					</div>

          <div className="bg-white w-[25%] h-1/4 space-y-1  text-[#6F594A] max-sm:w-full">
						<img src={quoteleft} className="place-self-start"alt="" />
						<blockquote className="text-center">
							Pakaian yang saya terima masih sangat bagus dan nyaman dipakai.
							Terima kasih kepada semua yang telah berdonasi, ini sangat
							membantu!
						</blockquote>
						<blockquote className="text-center">
							— Aisyah, 24 - Mahasiswa
						</blockquote>
						<img src={quoteright} className="place-self-end" alt="" />
					</div>

          <div className="bg-white w-[25%] h-1/4 space-y-1  text-[#6F594A] max-sm:w-full">
						<img src={quoteleft} className="place-self-start"alt="" />
						<blockquote className="text-center">
							Pakaian yang saya terima masih sangat bagus dan nyaman dipakai.
							Terima kasih kepada semua yang telah berdonasi, ini sangat
							membantu!
						</blockquote>
						<blockquote className="text-center">
							— Aisyah, 24 - Mahasiswa
						</blockquote>
						<img src={quoteright} className="place-self-end" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
