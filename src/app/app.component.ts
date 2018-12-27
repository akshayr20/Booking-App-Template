import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ToursComponent } from './tours/tours.component';
import { StoriesComponent } from './stories/stories.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  @ViewChild('viewcontainer', { read: ViewContainerRef }) vc: ViewContainerRef;
  title = 'booking-app-template';
  components = [
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    ToursComponent,
    StoriesComponent,
    BookingComponent,
    FooterComponent
  ];
  dynamicComponents = [];
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.vc.clear();
    this.components.map(component => {
      const factory = this.resolver.resolveComponentFactory(component);
      const dynamicComponent = factory.create(this.vc.parentInjector);
      this.dynamicComponents.push(dynamicComponent.hostView);
    });
  }

  renderComponent(component) {
    // this.vc.insert(component);
  }

  nextBatch() {
    alert('Called');
  }
}
