import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-idrealestatecomau-white flex flex-col items-start justify-start pt-0 px-0 pb-[4.8px] box-border leading-[normal] tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-14 box-border max-w-full lg:pb-9 lg:box-border mq1050:pb-[23px] mq1050:box-border mq750:pb-5 mq750:box-border">
        <section className="w-[1142px] flex flex-col items-start justify-start gap-28 max-w-full text-left text-3xl-1 text-idrealestatecomau-ship-gray font-idrealestatecomau-inter-regular-1575 lg:gap-14 mq750:gap-7">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq750:gap-4">
            <div className="w-full rounded-xl flex flex-col items-center justify-start pt-8 px-5 pb-[86px] box-border relative gap-[18px] max-w-[1142px] text-center lg:max-w-full">
              <img
                className="w-[1110px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_555px)] rounded-xl max-h-full overflow-hidden object-cover"
                alt=""
                src="/picture--web-lrgbdc6abbb97221105646aavif@2x.png"
              />
              <div className="w-[744px] flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
                <div className="relative leading-[36px] font-semibold z-[1] mq450:text-lg mq450:leading-[29px]">
                  Properties to call home
                </div>
              </div>
              <div className="w-full h-32 rounded-lg bg-idrealestatecomau-white flex flex-col items-start justify-start pt-0 px-0 pb-[79.2px] box-border max-w-[744px] z-[1] text-mini text-idrealestatecomau-salt-box mq750:h-auto mq750:max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
                  <div className="flex-1 border-wwwrealestatecomau-iron border-b-[0.8px] border-solid box-border overflow-x-auto flex flex-row items-start justify-between pt-3 pb-[11px] pl-[58px] pr-[51px] relative shrink-0 max-w-full gap-5 mq750:pl-[29px] mq750:pr-[25px] mq750:box-border">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-6 text-idrealestatecomau-ship-gray">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        Buy
                      </div>
                    </div>
                    <div className="h-0.5 w-[144.8px] absolute !m-[0] bottom-[-0.2px] left-[0px] bg-wwwrealestatecomau-blue shrink-0" />
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[22px]">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        Rent
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px] text-base-4">
                      <div className="relative leading-[24px] font-medium whitespace-nowrap">
                        Sold
                      </div>
                    </div>
                    <div className="relative text-mini-8 leading-[24px] font-medium whitespace-nowrap">
                      Address
                    </div>
                    <div className="relative text-mini-9 leading-[24px] font-medium whitespace-nowrap">
                      Agents
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-4 px-3 box-border relative min-h-[80px] shrink-0 max-w-full">
                  <div className="w-[476px] rounded-lg flex flex-row items-center justify-start flex-wrap content-center py-3 pl-3 pr-[175px] box-border gap-0 min-w-[48px] min-h-[48px] max-w-full [row-gap:20px] mq750:pr-[87px] mq750:box-border">
                    <img className="h-4 w-4 relative" alt="" src="/svg.svg" />
                    <input
                      className="w-[calc(100%_-_203px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-col items-start justify-start py-0 px-4 box-border font-idrealestatecomau-inter-regular-1575 text-base-5 text-idrealestatecomau-salt-box min-w-[177px]"
                      placeholder="Search suburb, postcode or state"
                      type="text"
                    />
                  </div>
                  <div className="!m-[0] absolute top-[16px] right-[14.8px] flex flex-row items-center justify-start">
                    <button className="cursor-pointer border-idrealestatecomau-mountain-mist border-[1px] border-solid py-2.5 px-[23px] bg-[transparent] rounded-3xl box-border flex flex-row items-center justify-center min-w-[48px] min-h-[48px]">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/svg-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start py-0 pl-2 pr-0">
                        <div className="flex flex-col items-center justify-start">
                          <div className="relative text-mini-8 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                            Filters
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 pl-2 pr-0 bg-[transparent] flex flex-col items-start justify-start box-border min-w-[56px] min-h-[48px]">
                      <div className="rounded-3xl bg-wwwrealestatecomau-blue flex flex-row items-center justify-center py-3 px-6 box-border min-w-[48px] min-h-[48px]">
                        <div className="relative text-mini-8 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-white text-center">
                          Search
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
              <div className="flex-1 flex flex-col items-center justify-start gap-4 max-w-[1142px] lg:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative leading-[36px] font-semibold mq450:text-lg mq450:leading-[29px]">
                      Explore all things property
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start pt-px pb-2 pl-4 pr-[711px] text-center text-mini-8 lg:pr-[355px] lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[177px] mq750:box-border">
                  <button className="cursor-pointer [border:none] py-0 pl-0 pr-2 bg-[transparent] flex flex-col items-start justify-start box-border min-w-[48px] min-h-[40px]">
                    <div className="shadow-[0px_0px_0px_1px_#3d3b40] rounded-3xl bg-wwwrealestatecomau-white-02 border-idrealestatecomau-ship-gray border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-[18px] min-w-[40px] min-h-[40px]">
                      <div className="relative text-mini-8 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                        Buying
                      </div>
                    </div>
                  </button>
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border min-w-[48px] min-h-[40px]">
                    <div className="rounded-3xl border-idrealestatecomau-mischka border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 px-[18px] min-w-[40px] min-h-[40px]">
                      <div className="relative leading-[24px] font-medium">
                        Renting
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-0 pl-0 pr-2 bg-[transparent] flex flex-col items-start justify-start box-border min-w-[48px] min-h-[40px]">
                    <div className="rounded-3xl border-idrealestatecomau-mischka border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 px-[18px] min-w-[40px] min-h-[40px]">
                      <div className="relative text-base-1 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                        Selling
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-idrealestatecomau-mischka border-[1px] border-solid py-1.5 px-[18px] bg-[transparent] rounded-3xl box-border flex flex-row items-center justify-center min-w-[40px] min-h-[40px] z-[1] hover:bg-lightgray-200 hover:border-lightgray-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-mini-8 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                      Researching
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-4 box-border [row-gap:20px] max-w-full text-lg-3 mq1050:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-center py-0 pl-0 pr-4 box-border min-w-[244px] max-w-full mq1050:flex-1">
                    <div className="self-stretch rounded-xl bg-idrealestatecomau-white border-idrealestatecomau-mischka border-[1px] border-solid flex flex-col items-start justify-center py-[0.8px] px-0">
                      <div className="self-stretch flex flex-col items-start justify-center pt-40 px-4 pb-4 relative">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="h-14 relative leading-[28px] font-semibold flex items-center">
                                <span>
                                  <p className="m-0">
                                    Get estimated property prices with a
                                  </p>
                                  <p className="m-0">realEstimate™</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 text-base-5 text-idrealestatecomau-salt-box">
                            <div className="self-stretch flex flex-col items-start justify-start py-1 px-0">
                              <div className="self-stretch relative leading-[24px]">
                                <p className="m-0">
                                  See how much your property's worth
                                </p>
                                <p className="m-0">
                                  whether you own it or want to buy it.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-base-8 text-idrealestatecomau-bahama-blue">
                            <a
                              className="self-stretch relative leading-[24px] font-semibold text-[inherit] [text-decoration:none]"
                              href="https://www.realestate.com.au/property/"
                              target="_blank"
                            >
                              Check property values
                            </a>
                          </div>
                        </div>
                        <div className="w-full h-full !m-[0] absolute top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-center py-4 px-5 box-border z-[1]">
                          <div className="flex flex-col items-start justify-center">
                            <img
                              className="w-[120px] h-[120px] relative overflow-hidden shrink-0 object-cover"
                              loading="lazy"
                              alt=""
                              src="/trackproperty95bbe33df44d4c2f3d60avif@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center py-0 pl-0 pr-4 box-border min-w-[244px] max-w-full mq1050:flex-1">
                    <div className="self-stretch rounded-xl bg-idrealestatecomau-white border-idrealestatecomau-mischka border-[1px] border-solid flex flex-col items-start justify-center py-[0.8px] px-0">
                      <div className="self-stretch flex flex-col items-start justify-center pt-40 px-4 pb-4 relative">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7">
                          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="relative leading-[28px] font-semibold">
                                Need help with a mortgage?
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 text-base-6 text-idrealestatecomau-salt-box">
                            <div className="self-stretch flex flex-col items-start justify-start py-1 px-0">
                              <div className="self-stretch h-12 relative leading-[24px] flex items-center">
                                <span>
                                  <p className="m-0">
                                    Compare your finance options to make an
                                  </p>
                                  <p className="m-0">informed call.</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-base text-idrealestatecomau-bahama-blue">
                            <a
                              className="self-stretch relative leading-[24px] font-semibold text-[inherit] [text-decoration:none]"
                              href="https://www.realestate.com.au/home-loans/"
                              target="_blank"
                            >
                              Explore home loans
                            </a>
                          </div>
                        </div>
                        <div className="w-full h-full !m-[0] absolute top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-center py-4 px-5 box-border z-[1]">
                          <div className="flex flex-col items-start justify-center">
                            <img
                              className="w-[120px] h-[120px] relative overflow-hidden shrink-0 object-cover"
                              loading="lazy"
                              alt=""
                              src="/homeloan12b7231b0bbf9cfb8bb8avif@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[359.3px] rounded-xl bg-idrealestatecomau-white border-idrealestatecomau-mischka border-[1px] border-solid box-border flex flex-col items-start justify-center py-[0.8px] px-0 max-w-full text-lg-4">
                    <div className="self-stretch flex flex-col items-start justify-center pt-40 px-4 pb-4 relative">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[28px] font-semibold">
                              Explore suburb profiles
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 text-base-5 text-idrealestatecomau-salt-box">
                          <div className="self-stretch flex flex-col items-start justify-start py-1 px-0">
                            <div className="relative leading-[24px]">
                              <p className="m-0">
                                Check out different suburb profiles and find
                              </p>
                              <p className="m-0">one that’s right for you.</p>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start text-base-8 text-idrealestatecomau-bahama-blue">
                          <a
                            className="self-stretch relative leading-[24px] font-semibold text-[inherit] [text-decoration:none]"
                            href="https://www.realestate.com.au/australia/"
                            target="_blank"
                          >
                            Research suburbs
                          </a>
                        </div>
                      </div>
                      <div className="w-full h-full !m-[0] absolute top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-center py-4 px-5 box-border z-[1]">
                        <div className="flex flex-col items-start justify-center">
                          <img
                            className="w-[120px] h-[120px] relative overflow-hidden shrink-0 object-cover"
                            loading="lazy"
                            alt=""
                            src="/explore1b62cebf6cbc7dd8748cavif@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full text-2xl-9 lg:gap-8 mq750:gap-4">
              <div className="w-full flex flex-col items-start justify-start py-0 px-4 box-border relative gap-4 max-w-[1142px] shrink-0 lg:max-w-full">
                <div className="relative leading-[36px] font-semibold mq450:text-lg mq450:leading-[29px]">
                  Latest property news
                </div>
                <div className="w-[1110px] h-[226px] overflow-x-auto shrink-0 flex flex-row items-start justify-start p-1 box-border max-w-full text-mini-5 mq1050:h-auto">
                  <div className="w-56 shrink-0 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-3">
                        <div className="self-stretch rounded flex flex-row items-center justify-center">
                          <img
                            className="h-32 flex-1 relative max-w-full overflow-hidden object-cover"
                            loading="lazy"
                            alt=""
                            src="/4bedroomapartmentjpg@2x.png"
                          />
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start min-h-[48px]">
                          <a
                            className="self-stretch h-12 relative leading-[24px] font-medium text-[inherit] flex items-center [text-decoration:none]"
                            href="https://www.realestate.com.au/news/the-spacious-well-connected-homes-in-the-hills-district-drawing-buyers/"
                            target="_blank"
                          >
                            <span>
                              <p className="m-0">
                                The spacious, well-connected
                              </p>
                              <p className="m-0">
                                homes in the Hills District…
                              </p>
                            </span>
                          </a>
                        </div>
                        <div className="self-stretch h-[18px] flex flex-row items-center justify-start pt-0 pb-[1.5px] pl-0 pr-[3px] box-border text-xs-6 text-idrealestatecomau-salt-box">
                          <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-1">
                            <a
                              className="relative leading-[16px] text-[inherit] [text-decoration:none]"
                              href="https://www.realestate.com.au/news/the-spacious-well-connected-homes-in-the-hills-district-drawing-buyers/"
                              target="_blank"
                            >
                              Presented by
                            </a>
                          </div>
                          <img
                            className="h-[15.1px] w-36 relative overflow-hidden shrink-0 object-cover max-w-[144px] max-h-[30px]"
                            alt=""
                            src="/sekisui-house-horizontal-1187538png@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-64 shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border text-mini-3">
                    <div className="self-stretch flex flex-col items-start justify-center py-0 pl-4 pr-0 shrink-0">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start gap-3">
                            <div className="self-stretch rounded flex flex-row items-center justify-center">
                              <img
                                className="h-32 flex-1 relative max-w-full overflow-hidden object-cover"
                                loading="lazy"
                                alt=""
                                src="/hlvisionshot1-notree-finaljpg@2x.png"
                              />
                            </div>
                            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start min-h-[48px]">
                              <a
                                className="self-stretch h-12 relative leading-[24px] font-medium text-[inherit] flex items-center [text-decoration:none]"
                                href="https://www.realestate.com.au/news/6-wellness-perks-of-this-new-lake-macquarie-over-55s-community-clubhouse/"
                                target="_blank"
                              >
                                <span>
                                  <p className="m-0">
                                    6 wellness perks of this new
                                  </p>
                                  <p className="m-0">
                                    Lake Macquarie over-55's…
                                  </p>
                                </span>
                              </a>
                            </div>
                            <div className="self-stretch h-[18px] flex flex-row items-center justify-start py-0 pl-0 pr-10 box-border text-xs-6 text-idrealestatecomau-salt-box">
                              <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-1">
                                <a
                                  className="relative leading-[16px] text-[inherit] [text-decoration:none]"
                                  href="https://www.realestate.com.au/news/6-wellness-perks-of-this-new-lake-macquarie-over-55s-community-clubhouse/"
                                  target="_blank"
                                >
                                  Presented by
                                </a>
                              </div>
                              <img
                                className="h-[30px] w-[106.2px] relative overflow-hidden shrink-0 object-cover max-w-[144px] max-h-[30px]"
                                alt=""
                                src="/logo5-924086b7813png@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[944px] shrink-0 flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-[calc(100%_-_480px)] text-mini-4">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[206px] max-w-[224px] text-mini-5">
                      <div className="self-stretch rounded flex flex-row items-start justify-start shrink-0">
                        <img
                          className="h-32 flex-1 relative max-w-full overflow-hidden object-cover"
                          loading="lazy"
                          alt=""
                          src="/gettyimages1316920356jpg@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 shrink-0">
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[19px] box-border min-h-[48px]">
                          <a
                            className="h-12 relative leading-[24px] font-medium text-[inherit] flex items-center [text-decoration:none]"
                            href="https://www.realestate.com.au/news/untapped-value-the-surprise-powerhouses-in-australias-property-race/"
                            target="_blank"
                          >
                            <span>
                              <p className="m-0">
                                Untapped value: The surprise
                              </p>
                              <p className="m-0">powerhouses in Australia’s…</p>
                            </span>
                          </a>
                        </div>
                        <a
                          className="relative text-xs-4 leading-[16px] text-idrealestatecomau-salt-box [text-decoration:none]"
                          href="https://www.realestate.com.au/news/untapped-value-the-surprise-powerhouses-in-australias-property-race/"
                          target="_blank"
                        >
                          3 mins read
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[206px] max-w-[224px] text-mini-6">
                      <div className="self-stretch rounded flex flex-row items-start justify-start shrink-0">
                        <img
                          className="h-32 flex-1 relative max-w-full overflow-hidden object-cover"
                          loading="lazy"
                          alt=""
                          src="/capi-d919d597047258e0fad7af450000560e-d91c45191fef66d21e7e2f4a8f12919e-9420402ab1ejpeg@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 shrink-0">
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-2.5 box-border min-h-[48px]">
                          <a
                            className="relative leading-[24px] font-medium text-[inherit] [text-decoration:none]"
                            href="https://www.realestate.com.au/news/barely-liveable-renters-forced-to-live-in-unhealthy-temperatures/"
                            target="_blank"
                          >
                            <p className="m-0">
                              ‘Barely liveable’: renters forced
                            </p>
                            <p className="m-0">to live in unhealthy…</p>
                          </a>
                        </div>
                        <a
                          className="relative text-xs-4 leading-[16px] text-idrealestatecomau-salt-box [text-decoration:none]"
                          href="https://www.realestate.com.au/news/barely-liveable-renters-forced-to-live-in-unhealthy-temperatures/"
                          target="_blank"
                        >
                          4 mins read
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[206px] max-w-[224px]">
                      <div className="self-stretch rounded flex flex-row items-start justify-start shrink-0">
                        <img
                          className="h-32 flex-1 relative max-w-full overflow-hidden object-cover"
                          alt=""
                          src="/gettyimages1424721583jpg@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 shrink-0">
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[7px] box-border min-h-[48px]">
                          <a
                            className="h-12 flex-1 relative leading-[24px] font-medium text-[inherit] flex items-center [text-decoration:none]"
                            href="https://www.realestate.com.au/insights/where-to-find-the-cheapest-3-and-4-bedroom-houses-near-the-city/"
                            target="_blank"
                          >
                            <span>
                              <p className="m-0">
                                Where to find the cheapest 3
                              </p>
                              <p className="m-0">
                                and 4-bedroom houses near t…
                              </p>
                            </span>
                          </a>
                        </div>
                        <a
                          className="relative text-xs-4 leading-[16px] text-idrealestatecomau-salt-box [text-decoration:none]"
                          href="https://www.realestate.com.au/insights/where-to-find-the-cheapest-3-and-4-bedroom-houses-near-the-city/"
                          target="_blank"
                        >
                          4 mins read
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[206px] max-w-[224px]">
                      <div className="self-stretch rounded flex flex-row items-start justify-start shrink-0">
                        <div className="h-32 flex-1 relative overflow-hidden">
                          <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_-_112px)] w-56 h-56 overflow-hidden hidden" />
                        </div>
                      </div>
                      <div className="self-stretch h-[84px] flex flex-col items-start justify-start gap-1.5 shrink-0">
                        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start min-h-[48px]">
                          <a
                            className="self-stretch flex-1 relative leading-[24px] font-medium text-[inherit] flex items-center [text-decoration:none]"
                            href="https://www.realestate.com.au/news/5-tips-for-an-affordable-knockdown-rebuild-in-2024/"
                            target="_blank"
                          >
                            <span>
                              <p className="m-0">5 tips for an affordable</p>
                              <p className="m-0">knockdown rebuild in 2024</p>
                            </span>
                          </a>
                        </div>
                        <div className="flex flex-row items-end justify-start gap-1 text-xs-6 text-idrealestatecomau-salt-box">
                          <div className="w-[73px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
                            <a
                              className="self-stretch h-4 relative leading-[16px] text-[inherit] flex items-center [text-decoration:none] shrink-0"
                              href="https://www.realestate.com.au/news/5-tips-for-an-affordable-knockdown-rebuild-in-2024/"
                              target="_blank"
                            >
                              Presented by
                            </a>
                          </div>
                          <img
                            className="h-[30px] w-[89.7px] relative overflow-hidden shrink-0 object-cover max-w-[144px] max-h-[30px]"
                            alt=""
                            src="/simonds-logo-350x100pxjpg@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 !m-[0] absolute right-[20px] bottom-[97px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-3xl bg-idrealestatecomau-white flex flex-row items-center justify-center p-3 box-border z-[1]">
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
                    alt=""
                    src="/svg-2.svg"
                  />
                </div>
              </div>
              <div className="w-full h-[392px] flex flex-col items-start justify-start py-0 px-4 box-border relative gap-4 max-w-[1142px] shrink-0 lg:max-w-full">
                <div className="relative leading-[36px] font-semibold mq450:text-lg mq450:leading-[29px]">
                  Local mortgage brokers
                </div>
                <div className="w-[1110px] flex-1 overflow-x-auto flex flex-row items-end justify-start pt-0 px-1 pb-4 box-border max-w-full text-base-9">
                  <div className="self-stretch w-[232px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border text-sm-6 text-idrealestatecomau-salt-box">
                    <div className="self-stretch flex-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-start pt-[50px] px-0 pb-4 shrink-0">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-4">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch h-[106px] flex flex-col items-start justify-start">
                            <div className="w-[135px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border">
                              <img
                                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                                loading="lazy"
                                alt=""
                                src="/image1@2x.png"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative leading-[20px]">
                                <p className="m-0">Enter a postcode to find</p>
                                <p className="m-0">
                                  mortgage brokers near you.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm-2 text-idrealestatecomau-ship-gray">
                        <div className="flex-1 flex flex-col items-start justify-start gap-3">
                          <div className="self-stretch flex flex-col items-start justify-start gap-1">
                            <div className="self-stretch relative tracking-[0.2px] leading-[20px] font-medium">
                              Postcode
                            </div>
                            <div className="self-stretch rounded-lg bg-idrealestatecomau-white flex flex-row items-start justify-start relative">
                              <div className="h-8 flex-1 overflow-y-auto flex flex-row items-start justify-center py-1 px-3 box-border min-w-[110px] max-h-[100px]">
                                <div className="h-6 flex-1 bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-[3px] box-border">
                                  <div className="w-40 h-[17px] overflow-auto shrink-0 flex flex-col items-start justify-start">
                                    <input
                                      className="w-40 [border:none] [outline:none] font-idrealestatecomau-inter-regular-1575 text-sm bg-[transparent] h-[17px] relative text-idrealestatecomau-ship-gray text-left flex items-center"
                                      placeholder="2000"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg border-idrealestatecomau-mountain-mist border-[1px] border-solid box-border z-[1]" />
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] py-1.5 px-[51px] bg-idrealestatecomau-ship-gray rounded-lg flex flex-row items-start justify-start box-border min-w-[32px] min-h-[32px] whitespace-nowrap hover:bg-dimgray">
                            <div className="relative text-smi-7 tracking-[0.2px] leading-[20px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-white text-center">
                              Find a broker
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[232px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border text-base">
                    <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 shrink-0">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3">
                        <button className="cursor-pointer [border:none] py-[11px] px-[29px] bg-wwwrealestatecomau-mosque flex flex-row items-start justify-start">
                          <img
                            className="h-7 w-[158px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/image-1.svg"
                          />
                        </button>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-4 pb-3">
                        <div className="flex flex-col items-start justify-start gap-1">
                          <img
                            className="w-16 h-16 relative rounded-13xl overflow-hidden shrink-0 object-cover"
                            loading="lazy"
                            alt=""
                            src="/ryanpappasjpg@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[24px] font-semibold">
                              Ryan Pappas
                            </div>
                            <div className="relative text-sm-6 leading-[20px]">
                              Mortgage broker
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm-7 text-idrealestatecomau-salt-box">
                        <div className="flex-1 flex flex-col items-start justify-start gap-3">
                          <div className="self-stretch relative leading-[20px]">
                            Based in Sydney
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-end pt-[26px] px-0 pb-2 box-border min-h-[20px]">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="flex flex-row items-start justify-start">
                                <a
                                  className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                                  href="https://www.mortgagechoice.com.au/ryan.pappas"
                                  target="_blank"
                                >
                                  See more details
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-4">
                        <button className="cursor-pointer border-idrealestatecomau-mountain-mist border-[1px] border-solid py-1 pl-[30px] pr-[29px] bg-[transparent] rounded-lg box-border flex flex-row items-start justify-start min-w-[32px] min-h-[32px] whitespace-nowrap hover:bg-gray-200 hover:border-gray-100 hover:border-[1px] hover:border-solid hover:box-border">
                          <div className="relative text-smi-9 tracking-[0.2px] leading-[20px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                            Request a call back
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[232px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border">
                    <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 shrink-0">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3">
                        <button className="cursor-pointer [border:none] py-[11px] px-[29px] bg-wwwrealestatecomau-mosque flex flex-row items-start justify-start">
                          <img
                            className="h-7 w-[158px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/image-1.svg"
                          />
                        </button>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-4 pb-3">
                        <div className="flex flex-col items-start justify-start gap-1">
                          <img
                            className="w-16 h-16 relative rounded-13xl overflow-hidden shrink-0 object-cover"
                            loading="lazy"
                            alt=""
                            src="/johnchappelowjpg@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[24px] font-semibold">
                              John Chappelow
                            </div>
                            <div className="relative text-sm-6 leading-[20px]">
                              Mortgage broker
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm-7 text-idrealestatecomau-salt-box">
                        <div className="flex-1 flex flex-col items-start justify-start gap-3">
                          <div className="self-stretch relative leading-[20px]">
                            Based in Sydney
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-end pt-[26px] px-0 pb-2 box-border min-h-[20px]">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="flex flex-row items-start justify-start">
                                <a
                                  className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                                  href="https://www.mortgagechoice.com.au/john.chappelow"
                                  target="_blank"
                                >
                                  See more details
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-4">
                        <button className="cursor-pointer border-idrealestatecomau-mountain-mist border-[1px] border-solid py-1 pl-[30px] pr-[29px] bg-[transparent] rounded-lg box-border flex flex-row items-start justify-start min-w-[32px] min-h-[32px] whitespace-nowrap hover:bg-gray-200 hover:border-gray-100 hover:border-[1px] hover:border-solid hover:box-border">
                          <div className="relative text-smi-9 tracking-[0.2px] leading-[20px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                            Request a call back
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[232px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border text-base-8">
                    <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 shrink-0">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3">
                        <button className="cursor-pointer [border:none] py-[11px] px-[29px] bg-wwwrealestatecomau-mosque flex flex-row items-start justify-start">
                          <img
                            className="h-7 w-[158px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/image-1.svg"
                          />
                        </button>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-4 pb-3">
                        <div className="flex flex-col items-start justify-start gap-1">
                          <img
                            className="w-16 h-16 relative rounded-13xl overflow-hidden shrink-0 object-cover"
                            loading="lazy"
                            alt=""
                            src="/samgjpg@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[24px] font-semibold">
                              Sam Ghoreyshi
                            </div>
                            <div className="relative text-sm-6 leading-[20px]">
                              Mortgage broker
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm-7 text-idrealestatecomau-salt-box">
                        <div className="flex-1 flex flex-col items-start justify-start gap-3">
                          <div className="self-stretch relative leading-[20px]">
                            Based in Sydney
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-end pt-[26px] px-0 pb-2 box-border min-h-[20px]">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="flex flex-row items-start justify-start">
                                <a
                                  className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                                  href="https://www.mortgagechoice.com.au/samg"
                                  target="_blank"
                                >
                                  See more details
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-4">
                        <button className="cursor-pointer border-idrealestatecomau-mountain-mist border-[1px] border-solid py-1 pl-[30px] pr-[29px] bg-[transparent] rounded-lg box-border flex flex-row items-start justify-start min-w-[32px] min-h-[32px] whitespace-nowrap hover:bg-gray-200 hover:border-gray-100 hover:border-[1px] hover:border-solid hover:box-border">
                          <div className="relative text-smi-9 tracking-[0.2px] leading-[20px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                            Request a call back
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[232px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border text-idrealestatecomau-salt-box">
                    <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 shrink-0">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3">
                        <div className="bg-wwwrealestatecomau-mosque flex flex-row items-start justify-start py-[11px] px-[29px]">
                          <img
                            className="h-7 w-[158px] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/image-1.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-4 pb-3 text-idrealestatecomau-ship-gray">
                        <div className="flex flex-col items-start justify-start gap-1">
                          <img
                            className="w-16 h-16 relative rounded-13xl overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/adambroughtonjpg@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[24px] font-semibold">
                              Adam Broughton
                            </div>
                            <div className="relative text-sm-6 leading-[20px]">
                              Mortgage broker
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-3 text-sm-8">
                        <div className="flex-1 relative leading-[20px]">
                          Based in Randwick
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm-7">
                        <div className="flex-1 flex flex-col items-start justify-end pt-[26px] px-0 pb-2 box-border min-h-[20px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="flex flex-row items-start justify-start">
                              <a
                                className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                                href="https://www.mortgagechoice.com.au/adam.broughton"
                                target="_blank"
                              >
                                See more details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-4">
                        <button className="cursor-pointer border-idrealestatecomau-mountain-mist border-[1px] border-solid py-1 pl-[30px] pr-[29px] bg-[transparent] rounded-lg box-border flex flex-row items-start justify-start min-w-[32px] min-h-[32px] whitespace-nowrap hover:bg-gray-200 hover:border-gray-100 hover:border-[1px] hover:border-solid hover:box-border">
                          <div className="relative text-smi-9 tracking-[0.2px] leading-[20px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                            Request a call back
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[216px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border text-sm-7">
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3">
                      <div className="bg-wwwrealestatecomau-mosque flex flex-row items-start justify-start py-[11px] px-[29px]">
                        <img
                          className="h-7 w-[158px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/image-1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[167px] flex flex-row items-start justify-start pt-0 px-4 pb-3 box-border text-base-9">
                      <div className="flex-1 flex flex-col items-start justify-start gap-1">
                        <img
                          className="w-16 h-16 relative rounded-13xl overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/bassamaboulhafjpg@2x.png"
                        />
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch h-6 relative leading-[24px] font-semibold flex items-center">
                            Bassam Aboulhaf
                          </div>
                          <div className="w-[108px] h-5 relative text-sm-6 leading-[20px] flex items-center">
                            Mortgage broker
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-8 flex flex-row items-start justify-start pt-0 px-4 pb-3 box-border text-idrealestatecomau-salt-box">
                      <div className="self-stretch flex-1 relative leading-[20px] flex items-center">
                        Based in Padstow Heights
                      </div>
                    </div>
                    <div className="self-stretch h-[54px] flex flex-row items-start justify-start py-0 px-4 box-border text-idrealestatecomau-salt-box">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-end pt-[26px] px-0 pb-2 box-border min-h-[20px]">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                          <div className="w-[108px] flex-1 flex flex-row items-start justify-start">
                            <a
                              className="self-stretch flex-1 relative [text-decoration:underline] leading-[20px] text-[inherit] flex items-center"
                              href="https://www.mortgagechoice.com.au/bassam.aboulhaf"
                              target="_blank"
                            >
                              See more details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-center text-smi-9">
                      <div className="h-8 flex-1 rounded-lg border-idrealestatecomau-mountain-mist border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-[30px] pr-[29px] min-w-[32px] min-h-[32px] whitespace-nowrap">
                        <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px] font-medium flex items-center justify-center">
                          Request a call back
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[232px] shrink-0 flex flex-col items-start justify-center py-0 pl-4 pr-0 box-border text-base-8">
                    <div className="self-stretch flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-center">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[50px] px-0 pb-0">
                          <div className="self-stretch flex flex-col items-start justify-center py-0 px-4">
                            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30px]">
                              <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-2">
                                  <img
                                    className="w-16 h-16 relative rounded-13xl overflow-hidden shrink-0 object-cover"
                                    alt=""
                                    src="/image-6@2x.png"
                                  />
                                </div>
                                <div className="self-stretch h-14 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border">
                                  <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                                    <div className="self-stretch flex-1 relative leading-[24px] font-semibold flex items-center">
                                      <span>
                                        <p className="m-0">
                                          Not sure who is best
                                        </p>
                                        <p className="m-0">for you?</p>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch h-[60px] flex flex-col items-start justify-start text-sm-7 text-idrealestatecomau-salt-box">
                                  <div className="self-stretch flex-1 relative leading-[20px] flex items-center">
                                    <span>
                                      <p className="m-0">
                                        Our experts can help you
                                      </p>
                                      <p className="m-0">
                                        connect with the right
                                      </p>
                                      <p className="m-0">broker.</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-10 flex flex-col items-start justify-start pt-0 px-4 pb-4 box-border text-center text-base text-idrealestatecomau-bahama-blue">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[34px]">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                                <div className="self-stretch flex-1 relative leading-[24px] font-semibold flex items-center justify-center">
                                  Request a call back
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-[232px] shrink-0 flex flex-col items-start justify-center py-0 pl-4 pr-0 box-border text-sm-7 text-idrealestatecomau-salt-box">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="self-stretch flex-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-idrealestatecomau-white overflow-hidden flex flex-col items-start justify-center">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-4">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch h-40 flex flex-col items-start justify-start">
                                <div className="w-[135px] flex-[0.675] flex flex-col items-start justify-start pt-[18px] px-0 pb-2 box-border">
                                  <img
                                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/image-7@2x.png"
                                  />
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                                  <div className="self-stretch flex-1 relative leading-[20px] flex items-center">
                                    <span>
                                      <p className="m-0">
                                        Whether you are refinancing
                                      </p>
                                      <p className="m-0">
                                        or investing, Mortgage
                                      </p>
                                      <p className="m-0">
                                        Choice brokers are with you
                                      </p>
                                      <p className="m-0">
                                        every step of the way.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-10 flex flex-col items-start justify-start pt-0 px-4 pb-4 box-border text-base-6 text-idrealestatecomau-bahama-blue">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                              <div className="w-[142px] flex-1 flex flex-row items-start justify-start">
                                <a
                                  className="self-stretch flex-1 relative leading-[24px] font-semibold text-[inherit] flex items-center [text-decoration:none]"
                                  href="https://www.mortgagechoice.com.au/mortgage-brokers/"
                                  target="_blank"
                                >
                                  View more brokers
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 !m-[0] absolute right-[20px] bottom-[154px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-3xl bg-idrealestatecomau-white flex flex-row items-center justify-center p-3 box-border z-[1]">
                  <img className="h-6 w-6 relative" alt="" src="/svg-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <Section />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
