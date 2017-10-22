import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import styles from './NavStaticLight.css'

class Partners extends Component {
  render() {
    return (
      <section class=" ">
      	<div class="container">
      		<div class="row">
      			<div class="slider slider--inline-arrows slider--arrows-hover text-center" data-arrows="true" data-children="6">
      				<ul class="slides flickity-enabled is-draggable" tabindex="0">

      					<div class="flickity-viewport">
      						<div class="flickity-slider">
      						</div>
      					</div>

      					<button class="flickity-prev-next-button previous" type="button" aria-label="previous"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>

      					<button class="flickity-prev-next-button next" type="button" aria-label="next"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>

      				  <div class="flickity-viewport">
                  <div class="flickity-slider"><li class="col-sm-3 col-xs-6 slide">
      								<img alt="Image" class="image--xs" src="/images/logos/Accenture_Logo.png" />
      							</li><li class="col-sm-3 col-xs-6 slide">
      								<img alt="Image" class="image--xs" src="/images/logos/Uber_Logo.png" />
      							</li><li class="col-sm-3 col-xs-6 slide">
      								<img alt="Image" class="image--xs" src="/images/logos/MakeInLA_Logo.png" />
      							</li><li class="col-sm-3 col-xs-6 slide">
      								<img alt="Image" class="image--xs" src="/images/logos/bravo_logo.png" />
      							</li><li class="col-sm-3 col-xs-6 slide is-selected">
      								<img alt="Image" class="image--xs" src="/images/logos/Microsoft_Logo.png" />
      							</li><li class="col-sm-3 col-xs-6 slide">
      								<img alt="Image" class="image--xs" src="/images/logos/Sena_Logo.png" />
      							</li>
                  </div>
                </div>
                <button class="flickity-prev-next-button previous" type="button" aria-label="previous"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>
                <button class="flickity-prev-next-button next" type="button" aria-label="next"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button></ul>
      			</div>
      		</div>
      	</div>
      </section>
    )
  }
}

export default Partners
