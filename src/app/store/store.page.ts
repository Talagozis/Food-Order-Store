import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  storeSegment: string = "catalog";
	store: any;
	categories: any[];

  constructor() {
    this.store = {"name":"Μπουγάτσα Ρεκόρ","slug":"rekor","description":null,"shortDescription":null,"logo":"/rekor-logo.jpg","cover":"rekor-cover.jpg","minOrderCost":0.0,"newUntilDate":null,"orderEmail":"rekorrekor1974@gmail.com","linkWebsite":null,"linkFacebook":"www.facebook.com/bougatsarekor","linkFoursquare":null,"managerName":"Παπαδόπουλος Γιάννης","managerPhoneNumber":"6936120191","managerEmail":null,"canOrderOnline":true,"hasDelivery":true,"hasTakeaway":true,"canPayByCash":true,"canPayByCreditCard":false,"isActive":true,"isClosed":false,"isArchived":false,"sendOrderByEmail":false,"sendOrderByPush":true,"bid":4223701720,"isOpen":true,"isNew":false,"View":{"catalog":1},"OpenHours":[{"bid":4223701720,"dayOfWeek":1,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null},{"bid":2702567425,"dayOfWeek":2,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null},{"bid":1181433130,"dayOfWeek":3,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null},{"bid":3955266131,"dayOfWeek":4,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null},{"bid":2434131836,"dayOfWeek":5,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null},{"bid":912997541,"dayOfWeek":6,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null},{"bid":3686830542,"dayOfWeek":0,"startTime":"2016-12-01T06:30:00","endTime":"2016-12-01T23:00:00","Store":null}],"Addresses":[{"bid":2434131836,"line":"Κ. Καραμανλή 1","zip":"62122","city":"Σέρρες","region":"Κέντρο","country":"Ελλάδα","lat":41.090602,"lon":23.549876,"Store":null},{"bid":3418394953,"line":"Μεραρχίας 57","zip":"62125","city":"Σέρρες","region":"Κέντρο","country":"Ελλάδα","lat":41.086035,"lon":23.545926,"Store":null},{"bid":1897260658,"line":"Βενιζέλου 160","zip":"62121","city":"Σέρρες","region":"Καμενίκια","country":"Ελλάδα","lat":41.086725,"lon":23.533378,"Store":null}],"Contacts":[{"bid":3686830542,"value":"2321055444","contactTypeName":"Σταθερό τηλέφωνο","contactTypePicture":"landline.png","Store":null,"ContactType":{"bid":4223701720,"name":"Σταθερό τηλέφωνο","picture":"landline.png"}},{"bid":2165696247,"value":"2321023341","contactTypeName":"Σταθερό τηλέφωνο","contactTypePicture":"landline.png","Store":null,"ContactType":{"bid":4223701720,"name":"Σταθερό τηλέφωνο","picture":"landline.png"}}],"Products":null,"Offers":null,"Store_Areas":[{"cost":0.0000,"Store":null,"Area":{"bid":4223701720,"zipCode":"62100","Region":{"bid":4223701720,"name":"Σέρρες","slug":"serres","Areas":null,"Stores":null},"Store_Areas":null}},{"cost":0.0000,"Store":null,"Area":{"bid":2702567425,"zipCode":"62121","Region":{"bid":4223701720,"name":"Σέρρες","slug":"serres","Areas":null,"Stores":null},"Store_Areas":null}},{"cost":0.0000,"Store":null,"Area":{"bid":1181433130,"zipCode":"62122","Region":{"bid":4223701720,"name":"Σέρρες","slug":"serres","Areas":null,"Stores":null},"Store_Areas":null}},{"cost":0.0000,"Store":null,"Area":{"bid":3955266131,"zipCode":"62123","Region":{"bid":4223701720,"name":"Σέρρες","slug":"serres","Areas":null,"Stores":null},"Store_Areas":null}},{"cost":0.0000,"Store":null,"Area":{"bid":2434131836,"zipCode":"62124","Region":{"bid":4223701720,"name":"Σέρρες","slug":"serres","Areas":null,"Stores":null},"Store_Areas":null}},{"cost":0.0000,"Store":null,"Area":{"bid":912997541,"zipCode":"62125","Region":{"bid":4223701720,"name":"Σέρρες","slug":"serres","Areas":null,"Stores":null},"Store_Areas":null}}],"Product_Tags":[{"level":3,"Product":null,"Tag":{"bid":4223701720,"name":"Μπουγάτσα","slug":"mpougatsa","description":null,"picture":"mpougatsa-picture.jpg","cover":"mpougatsa-cover.jpg","color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":3955266131,"name":"Μπουγάτσες","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":1,"Product":null,"Tag":{"bid":2702565297,"name":"Νηστίσιμο","slug":null,"description":null,"picture":null,"cover":null,"color":"ffb300","maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":2702567425,"name":"Σφολιάτες","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":912997541,"name":"Προϊόντα Ζύμης","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":3686830542,"name":"Στριφτόπιτες Ατομικές","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":3,"Product":null,"Tag":{"bid":2165696247,"name":"Pizza","slug":"pizza","description":null,"picture":"pizza-picture.jpg","cover":"pizza-cover.jpg","color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":3418394953,"name":"Πίτσες","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":1897260658,"name":"Σπιτική Πίτα","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":376126363,"name":"Σερραϊκά επιδόρπια","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":3,"Product":null,"Tag":{"bid":3149959364,"name":"Γλυκά","slug":"glika","description":null,"picture":"glika-picture.jpg","cover":"glika-cover.jpg","color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":1360389480,"name":"Ποτά","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":4134222481,"name":"Ακανέδες","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":3,"Product":null,"Tag":{"bid":2613088186,"name":"Καφές","slug":"kafes","description":null,"picture":"kafes-picture.jpg","cover":"kafes-cover.jpg","color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":1091953891,"name":"Καφέδες","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":1628825069,"name":"Γαλακτοκομικά","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":1539345830,"name":"Σπιτική στριφτή πίτα","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":18211535,"name":"Προϊόντα για κέρασμα","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":107690774,"name":"Χυμοί","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":2881523775,"name":"Αναψυκτικά","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":286647124,"name":"Νερό","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}},{"level":2,"Product":null,"Tag":{"bid":1091951763,"name":"Προσφορές","slug":null,"description":null,"picture":null,"cover":null,"color":null,"maxLevel":0,"productCount":0,"storeCount":0,"Product_Tags":null}}],"AspNetUsers":[{"bid":3955266131,"userName":"6936120191","email":"jr_pap@yahoo.gr","mobileNumber":null,"usernameSignupType":0,"providerSignupType":0,"created_at":"0001-01-01T00:00:00","updated_at":null,"User":null,"Roles":null,"Stores":null},{"bid":1807736731,"userName":"rekor.serresdelivery@gmail.com","email":"rekor.serresdelivery@gmail.com","mobileNumber":null,"usernameSignupType":0,"providerSignupType":0,"created_at":"0001-01-01T00:00:00","updated_at":null,"User":null,"Roles":null,"Stores":null}]};
    this.categories = this.store.Product_Tags;
  }

  ngOnInit() {
  }

  toggleSection(i) {
		this.categories[i].open = !this.categories[i].open;
	}

	getBackgroundStyle(imagepath){
		return {
			'background-image': 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 80%), url(' + imagepath + ')',
			'background-position': 'center center',
			'background-size': 'cover',
		};
	}

}
