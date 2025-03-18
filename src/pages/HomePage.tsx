import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Card from "../components/Card";
import Section from "../components/Section";
import Image from "../components/Image";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <Section
        background="white"
        className="pt-24 pb-20 relative overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 lg:order-1 animate-fadeIn">
              <span className="inline-block text-primary font-semibold mb-4 animate-slide-up">
                Welcome to Agency
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
                Lessons and insights <br />
                <span className="text-primary">from 8 years</span>
              </h1>
              <p className="text-body text-lg mb-8 max-w-lg opacity-90">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  size="large"
                  className="animate-fade-in"
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center animate-fadeIn">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full animate-pulse delay-300"></div>
                <Image
                  src="/images/illustration-updated.svg"
                  alt="Hero"
                  className="w-full max-w-lg relative z-10 filter-custom"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Client Logos Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4D4D4D] mb-2">
              Our Clients
            </h2>
            <p className="text-[#717171] text-base">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6, 1].map((index, i) => (
              <div
                key={`client-logo-wrapper-${i}`}
                className="w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] md:w-auto"
              >
                <div className="bg-white rounded-[5px] p-3 border border-gray-100 shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center">
                  <Image
                    src={`/images/client-logo${index}.svg`}
                    alt={`Client ${i + 1}`}
                    className="h-6 md:h-7 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community Section */}
      <Section background="lightGray" className="py-20">
        <Container>
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4D4D4D] mb-2">
              Manage your entire community in a single system
            </h2>
            <p className="text-[#717171] text-base">
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-24 lg:px-32">
            {[
              {
                icon: "community-icon1.svg",
                innerIcon: "community-icon1-inner.svg",
                title: "Membership Organisations",
                description:
                  "Our membership management software provides full automation of membership renewals and payments",
              },
              {
                icon: "community-icon2.svg",
                title: "National Associations",
                description:
                  "Our membership management software provides full automation of membership renewals and payments",
              },
              {
                icon: "community-icon3.svg",
                title: "Clubs And Groups",
                description:
                  "Our membership management software provides full automation of membership renewals and payments",
              },
            ].map((item, index) => (
              <Card
                key={`community-${index}`}
                className="text-center h-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                padding="medium"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#E8F5E9] rounded-xl rounded-tr-sm rounded-br-sm rounded-bl-sm flex items-center justify-center">
                      <Image
                        src={`/images/client-logo${index}.svg`}
                        alt={`Community Icon ${index + 1}`}
                        className="h-8 w-8 relative z-10"
                      />
                      {item.innerIcon && (
                        <Image
                          src={`/images/${item.innerIcon}`}
                          alt={`Community Icon Inner ${index + 1}`}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 z-20"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#4D4D4D] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#717171] text-sm mb-4">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Achievements Section */}
      <section className="bg-[#F5F7FA] py-[44.55px]">
        <Container className="justify-center justify-items-center">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[20.88px]">
            <div className="w-full lg:w-[375.88px]">
              <h2 className="text-[25.06px] font-semibold text-[#4D4D4D] mb-[5.57px] leading-[1.22em]">
                Helping a local
              </h2>
              <h2 className="text-[25.06px] font-semibold text-[#4CAF4F] mb-[5.57px] leading-[1.22em]">
                business reinvent itself
              </h2>
              <p className="text-[11.14px] text-[#18191F] leading-[1.5em]">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="w-full lg:flex-1">
              <div className="flex flex-col gap-[27.84px]">
                <div className="flex items-center gap-[20.88px]">
                  <div className="flex items-center gap-[11.14px]">
                    <div className="w-[27.84px] h-[27.84px] flex items-center justify-center bg-white rounded-full border border-[#4CAF4F]">
                      <Image
                        src="/images/members-icon.svg"
                        alt="Members"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <p className="text-[19.49px] font-bold text-[#4D4D4D] leading-[1.29em]">
                        2,245,341
                      </p>
                      <p className="text-[#717171] text-[11.14px]">Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[11.14px]">
                    <div className="w-[27.84px] h-[27.84px] flex items-center justify-center bg-white rounded-full border border-[#4CAF4F]">
                      <Image
                        src="/images/clubs-icon.svg"
                        alt="Clubs"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <p className="text-[19.49px] font-bold text-[#4D4D4D] leading-[1.29em]">
                        46,328
                      </p>
                      <p className="text-[#717171] text-[11.14px]">Clubs</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[20.88px]">
                  <div className="flex items-center gap-[11.14px]">
                    <div className="w-[27.84px] h-[27.84px] flex items-center justify-center bg-white rounded-full border border-[#4CAF4F]">
                      <Image
                        src="/images/event-bookings-icon.svg"
                        alt="Event Bookings"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <p className="text-[19.49px] font-bold text-[#4D4D4D] leading-[1.29em]">
                        828,867
                      </p>
                      <p className="text-[#717171] text-[11.14px]">
                        Event Bookings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[11.14px]">
                    <div className="w-[27.84px] h-[27.84px] flex items-center justify-center bg-white rounded-full border border-[#4CAF4F]">
                      <Image
                        src="/images/payments-icon.svg"
                        alt="Payments"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <p className="text-[19.49px] font-bold text-[#4D4D4D] leading-[1.29em]">
                        1,926,436
                      </p>
                      <p className="text-[#717171] text-[11.14px]">Payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Calendar Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-fadeIn">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/5 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse delay-300"></div>
                <Image
                  src="/images/mobile-login-illustration.svg"
                  alt="Mobile Login"
                  className="w-full max-w-lg relative z-10 filter-custom"
                />
              </div>
            </div>
            <div className="animate-fadeIn delay-100">
              <span className="inline-block text-primary font-semibold mb-4">
                Effortless Integration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                How to design your site footer like we did
              </h2>
              <p className="text-body text-lg mb-8 opacity-90">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  size="large"
                  className="animate-fade-in"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-[#F5F7FA] py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-5/12">
              <div className="rounded-md overflow-hidden shadow-lg">
                <Image
                  src="/images/customer-background.jpg"
                  alt="Customer Testimonial Background"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="mb-6">
                <p className="text-[#717171] text-base mb-5">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                  Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                  in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                  Morbi laoreet elit at ligula molestie, nec molestie mi
                  blandit.
                </p>
                <div className="mb-5">
                  <h4 className="text-primary font-semibold">Tim Smith</h4>
                  <p className="text-[#89939E]">
                    British Dragon Boat Racing Association
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 items-center">
                <div className="flex flex-wrap gap-5">
                  <div className="w-16 h-16 bg-[#E8F5E9] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/logo-1.svg"
                      alt="Logo 1"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="w-16 h-16 bg-[#F5F7FA] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/logo-2.svg"
                      alt="Logo 2"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="w-16 h-16 bg-[#F5F7FA] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/logo-3.svg"
                      alt="Logo 3"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="w-16 h-16 bg-[#F5F7FA] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/logo-4.svg"
                      alt="Logo 4"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="w-16 h-16 bg-[#F5F7FA] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/logo-5.svg"
                      alt="Logo 5"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="w-16 h-16 bg-[#F5F7FA] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/logo-6.svg"
                      alt="Logo 6"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <div className="flex items-center text-primary font-semibold">
                  <span>Meet all customers</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D] mb-5">
              Caring is the new marketing
            </h2>
            <p className="text-[#717171] text-base max-w-3xl mx-auto">
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                image: "blog-image1.jpg",
                title:
                  "Creating Streamlined Safeguarding Processes with OneRen",
              },
              {
                image: "blog-image2.jpg",
                title:
                  "What are your safeguarding responsibilities and how can you manage them?",
              },
              {
                image: "blog-image3.jpg",
                title:
                  "Revamping the Membership Model with Triathlon Australia",
              },
            ].map((post, index) => (
              <div key={`blog-${index}`} className="flex flex-col">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-t-md">
                  <Image
                    src={`/images/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white p-5 rounded-b-md shadow-md flex flex-col">
                  <h3 className="text-[#717171] text-lg font-semibold mb-4">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center text-primary font-semibold">
                    <span>Readmore</span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-[#F5F7FA] py-20 px-8 text-center relative overflow-hidden flex flex-col items-center">
          <h2 className="text-[44.55px] font-semibold text-[#263238] mb-[22.27px] leading-[1.19] max-w-2xl">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Button
            variant="primary"
            size="large"
            className="bg-[#4CAF4F] hover:bg-[#4CAF4F]/90 animate-fade-in"
            rightIcon={
              <img
                src="/images/right-arrow.svg"
                alt="Arrow"
                className="w-4 h-4 ml-[5.57px]"
              />
            }
          >
            Get a Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
