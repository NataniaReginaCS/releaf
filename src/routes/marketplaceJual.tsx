import { createFileRoute } from "@tanstack/react-router";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

export const Route = createFileRoute("/marketplaceJual")({
	component: MarketPlaceJualComponent,
});

function MarketPlaceJualComponent() {
	return (
		<>
			<div className="h-full bg-white px-20 my-10  md:my-0 mt-0 sm:w-full">\
				<div className="w-full relative pl-1 pt-[150px]">
					<h1 className="text-black text-[30px]">
						Lengkapi Detail Produk yang ingin dipasarkan
					</h1>
					<form>
						<div className="space-y-12 pb-12">
							<div className="border-b border-gray-900/10 pb-12 ">
								<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-full">
										<div className="col-span-full">
											<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 mb-5">
												<div className="text-center">
													<svg
														className="mx-auto size-12 text-gray-300"
														viewBox="0 0 24 24"
														fill="currentColor"
														aria-hidden="true"
														data-slot="icon"
													>
														<path
															fill-rule="evenodd"
															d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
															clip-rule="evenodd"
														/>
													</svg>
													<div className="mt-4 flex text-sm/6 text-gray-600">
														<label
															htmlFor="file-upload"
															className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
														>
															<span className="text-[#808080]">Upload a photo</span>
															<input
																id="file-upload"
																name="file-upload"
																type="file"
																className="sr-only"
															/>
														</label>
														
													</div>
													
												</div>
											</div>
										</div>
										<label
											htmlFor="username"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Nama
										</label>
										<div className="mt-2">
											<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
												<input
													type="text"
													name="username"
													id="username"
													className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
													placeholder="Nama Produk"
												/>
											</div>
										</div>
									</div>

									<div className="col-span-full">
										<label
											htmlFor="about"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Deskripsi
										</label>
										<div className="mt-2">
											<textarea
												name="about"
												id="about"
												className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
												placeholder="Deskripsi Produk"
											></textarea>
										</div>
									</div>

									<div className="sm:col-span-full">
										<fieldset className="mt-5">
											<legend className="text-sm/6 font-semibold text-gray-900">
												Tipe Pakaian
											</legend>
											<div className="mt-6 gap-[4.5%] flex flex-row">
												<div className="flex items-center gap-x-3">
													<input
														id="atasan"
														name="tipe"
														type="radio"
														
														className="relative size-4 appearance-none rounded-full border border-gray-300 cursor-pointer bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="atasan"
														className="block text-sm/6 font-medium text-gray-900"
													>
														Atasan
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="bawahan"
														name="tipe"
														type="radio"
														className="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="bawahan"
														className="block text-sm/6 font-medium text-gray-900"
													>
														Bawahan
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="oneset"
														name="tipe"
														type="radio"
														className="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="oneset"
														className="block text-sm/6 font-medium text-gray-900"
													>
														One Set
													</label>
												</div>
											</div>
										</fieldset>
									</div>

									<div className="sm:col-span-full">
										<fieldset>
											<legend className="text-sm/6 font-semibold text-gray-900">
												Ukuran
											</legend>
											<div className="mt-6 gap-[5%] flex flex-row">
												<div className="flex items-center gap-x-3">
													<input
														id="small"
														name="ukuran"
														type="radio"
														
														className="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="small"
														className="block text-sm/6 font-medium text-gray-900"
													>
														Small
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="medium"
														name="ukuran"
														type="radio"
														className="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="medium"
														className="block text-sm/6 font-medium text-gray-900"
													>
														Medium
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="large"
														name="ukuran"
														type="radio"
														className="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="large"
														className="block text-sm/6 font-medium text-gray-900"
													>
														Large
													</label>
												</div>
												<div className="flex items-center gap-x-3">
													<input
														id="x-large"
														name="ukuran"
														type="radio"
														className="relative size-4 appearance-none rounded-full cursor-pointer border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
													/>
													<label
														htmlFor="x-large"
														className="block text-sm/6 font-medium text-gray-900"
													>
														X-Large
													</label>
												</div>
											</div>
										</fieldset>
									</div>
									<div className="sm:col-span-1 sm:col-start-1">
										<label
											htmlFor="username"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Harga
										</label>
										<div className="mt-2">
											<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
												<div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
													Rp
												</div>
												<input
													type="text"
													name="username"
													id="username"
													className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
													placeholder="..."
												/>
											</div>
										</div>

										<label
											htmlFor="username"
											className="block text-sm/6 font-medium text-gray-900 mt-2"
										>
											Nomor Telepon
										</label>
										<div className="mt-2">
											<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
												<input
													type="text"
													name="username"
													id="username"
													className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
													placeholder="089XXXXXXXXX"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="username"
												className="block text-sm/6 font-medium text-gray-900 mt-2"
											>
												Lokasi
											</label>
											<div className="mt-2">
												<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
													<input
														type="email"
														name="username"
														id="username"
														className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
														placeholder="Jl.angrek..."
													/>
												</div>
											</div>
										</div>

										
									</div>

									<div className="sm:col-span-1 flex flex-col justify-center pb-5">
										<label
											htmlFor="username"
											className="block text-sm/6 font-medium text-gray-900 mt-5"
										>
											Mail
										</label>
										<div className="mt-2">
											<div className="flex items-center  rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
												<input
													type="email"
													name="username"
													id="username"
													className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
													placeholder="abcde@gmail.com"
												/>
											</div>
										</div>
									</div>

									<div className="col-span-4 flex justify-end items-end sm:col-span-1">
										<button type="submit" className="rounded-md h-10 w-40 bg-[#FFD8BE] px-3 py-2 text-sm text-black shadow-xs hover:bg-[#ECBC9C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload Produk</button>
									</div>
								</div>			
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
