// Affiliate Links Management
// This file contains affiliate links for the products featured on the website

const affiliateLinks = {
    // Water Filter Products
    waterFilter: {
        amazon: {
            url: "https://partnernet.amazon.de/gp/associates/network/main.html",
            productId: "B08XYZ123", // Example product ID
            commission: "3-8%",
            description: "Amazon Associates Germany - Premium Water Filter"
        },
        berkey: {
            url: "https://berkey-waterfilters.de/en/pages/affiliate-program",
            commission: "3%",
            description: "Berkey Water Filters Germany Affiliate Program"
        }
    },

    // Coffee Machine Products
    coffeeMachine: {
        amazon: {
            url: "https://partnernet.amazon.de/gp/associates/network/main.html",
            productId: "B09ABC456", // Example product ID
            commission: "3-8%",
            description: "Amazon Associates Germany - Smart Coffee Machine"
        },
        miele: {
            url: "https://www.flexoffers.com/affiliate-programs/miele-affiliate-program/",
            commission: "4-16%",
            description: "Miele Affiliate Program via FlexOffers"
        }
    },

    // Food Box Products
    foodBox: {
        germanFoodBox: {
            url: "https://getlasso.co/affiliate/german-food-box/",
            commission: "$5 per box",
            description: "German Food Box Affiliate Program"
        },
        wolt: {
            url: "https://explore.wolt.com/en/deu/affiliates",
            commission: "Variable",
            description: "Wolt Germany Affiliate Program"
        }
    }
};

// Function to generate affiliate links with tracking
function generateAffiliateLink(product, provider, affiliateId = null) {
    const baseLink = affiliateLinks[product][provider].url;
    
    // Add affiliate ID and tracking parameters
    if (affiliateId) {
        const separator = baseLink.includes('?') ? '&' : '?';
        return `${baseLink}${separator}tag=${affiliateId}&ref=hausprofi`;
    }
    
    return baseLink;
}

// Function to track clicks for analytics
function trackAffiliateClick(product, provider, price = null) {
    // Analytics tracking code would go here
    console.log(`Affiliate click tracked: ${product} - ${provider}`, {
        timestamp: new Date().toISOString(),
        product: product,
        provider: provider,
        price: price,
        userAgent: navigator.userAgent
    });
    
    // Send to analytics service (Google Analytics, etc.)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
            'product_category': product,
            'affiliate_provider': provider,
            'value': price || 0
        });
    }
}

// Update product buttons with affiliate links
function updateAffiliateLinks() {
    // Water Filter Button
    const waterFilterBtn = document.querySelector('.product-category:nth-child(1) .btn-product');
    if (waterFilterBtn) {
        waterFilterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            trackAffiliateClick('waterFilter', 'amazon', 89.99);
            // Replace with actual affiliate link
            window.open('https://amazon.de/dp/EXAMPLE123?tag=hausprofi-21', '_blank');
        });
    }

    // Coffee Machine Button
    const coffeeMachineBtn = document.querySelector('.product-category:nth-child(2) .btn-product');
    if (coffeeMachineBtn) {
        coffeeMachineBtn.addEventListener('click', function(e) {
            e.preventDefault();
            trackAffiliateClick('coffeeMachine', 'amazon', 149.99);
            // Replace with actual affiliate link
            window.open('https://amazon.de/dp/EXAMPLE456?tag=hausprofi-21', '_blank');
        });
    }

    // Food Box Button
    const foodBoxBtn = document.querySelector('.product-category:nth-child(3) .btn-product');
    if (foodBoxBtn) {
        foodBoxBtn.addEventListener('click', function(e) {
            e.preventDefault();
            trackAffiliateClick('foodBox', 'germanFoodBox', 29.99);
            // Replace with actual affiliate link
            window.open('https://germanfoodbox.com/?ref=hausprofi', '_blank');
        });
    }
}

// Affiliate disclosure compliance
function showAffiliateDisclosure() {
    const disclosure = `
        <div id="affiliate-disclosure" style="background: #f8f9fa; border: 1px solid #dee2e6; padding: 15px; margin: 20px 0; border-radius: 5px; font-size: 14px;">
            <strong>Affiliate-Hinweis:</strong> Diese Seite enthält Affiliate-Links. Wenn Sie über diese Links einkaufen, 
            erhalten wir möglicherweise eine kleine Provision, ohne dass Ihnen zusätzliche Kosten entstehen. 
            Dies hilft uns, die Website zu betreiben und Ihnen weiterhin kostenlose Inhalte anzubieten.
        </div>
    `;
    
    // Add disclosure to product sections
    const productSection = document.querySelector('.products .container');
    if (productSection) {
        productSection.insertAdjacentHTML('afterbegin', disclosure);
    }
}

// Initialize affiliate functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateAffiliateLinks();
    showAffiliateDisclosure();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        affiliateLinks,
        generateAffiliateLink,
        trackAffiliateClick
    };
}

