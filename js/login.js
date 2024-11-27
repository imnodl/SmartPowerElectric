// LOG IN FORM


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded login credentials per department
    const credentials = {
        "mis": { 
            "password": "mis2024", 
            "department": "IT", 
            "redirect": "portal_mis.html" 
        },
        "engineering": { 
            "password": "engineering2024", 
            "department": "Engineering", 
            "redirect": "portal_engineering.html" 
        },
        "warehouse": { 
            "password": "warehouse2024", 
            "department": "Warehouse", 
            "redirect": "portal_warehouse.html" 
        },
        "accounting": { 
            "password": "accounting2024", 
            "department": "Accounting", 
            "redirect": "portal_accounting.html" 
        },
        "production": { 
            "password": "production2024", 
            "department": "Production", 
            "redirect": "portal_production.html" 
        },
        // Add more roles here
    };
    

    // Check if entered username exists in the credentials object
    if (credentials[username] && credentials[username].password === password) {
        // Successful login
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("department", credentials[username].department);
        window.location.href = credentials[username].redirect; // Redirect to the specific department portal
    } else {
        // Invalid login credentials
        document.getElementById("error-message").style.display = "block";
    }
});



//electric


