import CustomSoftwarePage from '@/app/components/custom-software'
import DigitalMarketingPage from '@/app/components/digital-marketing'
import MobileAppPage from '@/app/components/mobile-app'
import SocialMediaManagementPage from '@/app/components/social-media-management'
import UIUXDesignPage from '@/app/components/ui-ux-design'
import WebApplicationPage from '@/app/components/web-application'
import React from 'react'

function page() {
  return (
    <div>
      
       <CustomSoftwarePage />

<WebApplicationPage/>

<MobileAppPage/>

<DigitalMarketingPage/>
<UIUXDesignPage />
<SocialMediaManagementPage />
    </div>
  )
}

export default page