import React from 'react';

function ExampleComponent() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>Call / Text: (415) 633-6225</p>
            <p>info@berryclean.com</p>
            <p>@berrycleanUSA</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul>
              <li>Professional cleaning services</li>
              <li>Cleaning services near me</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Trabajo / Job</li>
              <li>Privacy policy</li>
              <li>Request quote</li>
              <li>Client portal</li>
              <li>Book now</li>
              <li>Refer a friend</li>
              <li>Memberships</li>
              <li>Gift cards</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy;2024 BerryClean. All rights reserved.</p>
          <p className="text-sm">Powered by Simba</p>
        </div>
      </div>
    </footer>
  );
}

export default ExampleComponent;
