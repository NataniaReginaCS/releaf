import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/upload")({
	component: JualComponent,
});

function JualComponent() {
	return (
		<>
			<div className="h-full bg-white px-20 pb-10 md:my-0 mt-0 md:ps-32 md:pe-32 max-sm:mt-17 max-sm:px-7">
				<div className="mt-17 max-sm:mt-0">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						<li className="inline-flex items-center">
							<a
								href="/"
								className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-green-300"
							>
								Home
							</a>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="w-6 h-6 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<a
									href="/marketplace"
									className="ml-1 text-sm font-medium text-gray-500 hover:text-green-300 md:ml-2"
								>
									Marketplace
								</a>
							</div>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="w-6 h-6 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
									Upload
								</span>
							</div>
						</li>
					</ol>
				</div>
				<div className="w-full relative  mt-5 ">
					<h1 className="text-black text-[30px]">
						Lengkapi Detail Produk yang ingin dipasarkan
					</h1>

					<form>
						<div className="space-y-5">
							<div className="mt-10 grid-cols-1 gap-x-6 gap-y-12 sm:grid=cols-6">
								<div className="col-span-full">
									<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
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
													<span>Upload a file</span>
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

								<div className="sm:-col-span-4 mt-5">
									<label
										htmlFor="nama"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Nama
									</label>
									<div className="mt-2">
										<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
											<input
												type="text"
												name="nama"
												id="nama"
												className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
												placeholder="Nama Produk"
											/>
										</div>
									</div>
								</div>

								<div className="col-span-full mt-4">
									<label
										htmlFor="deskripsi"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Deskripsi
									</label>
									<div className="mt-2">
										<textarea
											name="deskripsi"
											id="deskripsi"
											className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
											rows={3}
											placeholder="Deskripsi Produk"
										></textarea>
									</div>
								</div>
							</div>

							<div className="mt-5 space-y-4">
								<fieldset>
									<legend className="text-sm/6 font-semibold text-gray-900">
										Tipe Pakaian
									</legend>
									<div className="mt-3 space-y-6 flex flex-col sm:flex-row gap-x-15">
										<div className="flex items-center gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												Atasan
											</label>
										</div>

										<div className="flex gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												Bawahan
											</label>
										</div>

										<div className="flex gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												One Set
											</label>
										</div>
									</div>
								</fieldset>

								<fieldset>
									<legend className="text-sm/6 font-semibold text-gray-900">
										Ukuran
									</legend>
									<div className="mt-3 space-y-6 flex flex-col sm:flex-row gap-x-17">
										<div className="flex items-center gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												Small
											</label>
										</div>

										<div className="flex gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												Medium
											</label>
										</div>

										<div className="flex gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												Large
											</label>
										</div>
										<div className="flex gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
											/>
											<label
												htmlFor="push-everything"
												className="block text-sm/4 font-medium text-gray-900"
											>
												X-Large
											</label>
										</div>
									</div>
								</fieldset>
							</div>

							<div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
								<div className="col-span-full">
									<label
										htmlFor="username"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Harga
									</label>
									<div className="mt-2">
										<div className="flex items-center w-[32.3%] max-sm:w-full max-lg:w-[31.5%] rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
											<div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
												Rp
											</div>
											<input
												type="text"
												name="username"
												id="username"
												className="border-none outline-none w-100 max-sm:w-2/4 max-lg:w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
												placeholder="..."
											/>
										</div>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="first-name"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Nomor Telepon
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
											placeholder="0877XXXXXXXX"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="first-name"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Mail
									</label>
									<div className="mt-2">
										<input
											type="email"
											name="first-name"
											id="first-name"
											className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
											placeholder="abcde@gmail.com"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="city"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Lokasi
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="city"
											id="city"
											className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
											placeholder="Jl.Anggrek..."
										/>
									</div>
								</div>
							</div>

							<div className="mt-0 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
								<div className="col-span-1 mt-0">
									<fieldset>
										<div className="mt-6 space-y-6">
											<div className="flex gap-3">
												<div className="flex h-6 shrink-0 items-center">
													<div className="group grid size-4 grid-cols-1">
														<input
															id="comments"
															aria-describedby="comments-description"
															name="comments"
															type="checkbox"
															checked
															className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
														/>
														<svg
															className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
															viewBox="0 0 14 14"
															fill="none"
														>
															<path
																className="opacity-0 group-has-checked:opacity-100"
																d="M3 8L6 11L11 3.5"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																className="opacity-0 group-has-indeterminate:opacity-100"
																d="M3 7H11"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
													</div>
												</div>
												<div className="text-sm/6">
													<label
														htmlFor="comments"
														className="font-medium text-gray-900"
													>
														I read and agree to{" "}
														<span className="text-cyan-500">
															terms and conditions
														</span>
													</label>
												</div>
											</div>
										</div>
									</fieldset>
								</div>
								<div className="col-span-1 flex justify-end items-end">
									<button
										type="submit"
										className="rounded-md bg-[#FFD8BE] w-3/6 max-sm:w-full max-sm:mt-5 px-3 py-2 text-sm  text-black shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Upload Produk
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
