# Organic Resume
This resume has been created as part of the #cloudresumechallenge Azure Edition  

The static files are all hosted in an Azure Storage Container($web directory) and code is being pushed from my local repo to the Azure Repos for my personal DevOps Org in Azure DevOps. The container is served through an Azure CDN Endpoint having an SSL-secured custom domain.  

At the end of the page, there is a simple visitor counter which displays the number of visits so far to this page.  

The logic for the counter is implemented using Azure Functions Python SDK. Every page load calls the API endpoints within an Azure Functions App exposed through an API Gateway(Azure API Management Service) which gets/updates the current count from an Azure CosmosDB database.

[Access it here] https://resume.plok.work
