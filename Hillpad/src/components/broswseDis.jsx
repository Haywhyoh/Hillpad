import '../assets/css/frontend-lite.min.css'
import '../assets/css/style.css';

export default function BrowseDis() {
    return (
        <section
				className="elementor-section elementor-top-section elementor-element elementor-element-0a490d1 elementor-section-full_width elementor-section-stretched mb-5 elementor-section-height-default elementor-section-height-default"
				data-id="0a490d1" data-element_type="section"
				data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
				
				<div className="elementor-section elementor-inner-section mb-6 container elementor-element elementor-element-254f280d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
					data-id="254f280d" data-element_type="section">
					<div
						className="elementor-container elementor-column-gap-default flex-nowrap px-0 d-flex align-items-center justify-content-between mb-4">
						<div className="elementor-column elementor-inner-column elementor-element elementor-element-eab212c"
							data-id="eab212c" data-element_type="column">
							<div className="p-0 elementor-widget-wrap ">
								<div className="elementor-element elementor-element-59874bcc mb-0 elementor-widget elementor-widget-highlighted-heading"
									data-id="59874bcc" data-element_type="widget" data-widget_type="highlighted-heading.default">
									<div className="elementor-widget-container">
										<h2 className="finder-elementor-highlighted-heading__title h3 mb-0">
											Browse by Discipline</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d3f933c"
							data-id="4d3f933c" data-element_type="column">
							<div className="p-0 elementor-widget-wrap ">
								<div className="elementor-element elementor-element-39a79978 elementor-align-right elementor-mobile-align-right elementor-tablet-align-right elementor-widget elementor-widget-button"
									data-id="39a79978" data-element_type="widget" data-widget_type="button.button-finder">
									<div className="elementor-widget-container">
										<div className="elementor-button-wrapper">
											<a href="{% url 'disciplines_listing' %}"
												className="elementor-button-link btn btn-link bg-link rounded fr-elementor-button p-0 fw-normal"
												role="button">
												<span className="elementor-button-content-wrapper">
													<span className="elementor-button-icon btn__icon btn__icon--right order-2 lh-sm">
														<i aria-hidden="true" className="ms-2 fi fi-arrow-long-right"></i>
													</span>
													<span className="elementor-button-text order-1">View
														all</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="elementor-container elementor-column-gap-default container row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4 px-0">
					
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-0ae5cc6 col"
						data-id="0ae5cc6" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6ccef21 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6ccef21" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">
									
									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-success text-success rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-tractor"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Agriculture & Forestry </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-42a17a9 col"
						data-id="42a17a9" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-2035dc8 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="2035dc8" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-thermometer"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Applied Sciences & Professions </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-2acb8f4 col"
						data-id="2acb8f4" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-1814313 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="1814313" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-warning text-warning rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-paint-brush"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Art, Design & Architecture </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-a95ef18 col"
						data-id="a95ef18" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-5b31fc6 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="5b31fc6" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-info text-info rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-briefcase"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Business & Management </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-computer"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Computer Science & IT </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-f15d91c col"
						data-id="f15d91c" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-5505b3a ewc-h-100 elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="5505b3a" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-success text-danger rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-book"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Education & Training</h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-settings"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Engineering & Technology </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-info rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-calculator"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Natural Sciences & Mathematics </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-success text-success rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-house-chosen"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Hospitality, Leisure & Sports </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-primary rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fi fi-friends"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Humanities & Social Sciences</h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-warning text-warning rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-film"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Journalism, Media & Communication </h3>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-cc934db col"
						data-id="cc934db" data-element_type="column">
						<div className="p-0 elementor-widget-wrap ">
							<div className="elementor-element elementor-element-6789bbc elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
								data-id="6789bbc" data-element_type="widget"
								data-widget_type="icon-box.card-category">
								<div className="elementor-widget-container">

									<a href="{% url 'discipline_detail' %}"
										className="icon-box card card-body h-100 border-0 shadow-sm-1 card-hover h-100 text-center">
										<div
											className="icon-box-media finder-elementor-icon-box-icon  icon-box-media bg-faded-primary text-info rounded-circle mb-4 mx-auto">
											<i aria-hidden="true"
												className="finder-elementor-icon-box-icon fa fa-cloud-sun"></i>
										</div>
										<h3
											className="finder-elementor-icon-box-title elementor-icon-box-title icon-box-title mb-0 fs-base">
											Environmental Sciences </h3>
									</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				
			</section>
    )
}