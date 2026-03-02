import CustomSoftwarePage from "@/app/components/(Services)/custom-software";
import DigitalMarketingPage from "@/app/components/(Services)/digital-marketing";
import MobileAppPage from "@/app/components/(Services)/mobile-app";
import SocialMediaManagementPage from "@/app/components/(Services)/social-media-management";
import UIUXDesignPage from "@/app/components/(Services)/ui-ux-design";
import WebApplicationPage from "@/app/components/(Services)/web-application";
import React from "react";

function page() {
  return (
    <div>
      <CustomSoftwarePage />

      <WebApplicationPage />

      <MobileAppPage />

      <DigitalMarketingPage />
      <UIUXDesignPage />
      <SocialMediaManagementPage />
    </div>
  );
}

export default page;
