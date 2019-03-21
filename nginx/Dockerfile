# Base image
FROM nginx

# Copy config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start command
CMD ["nginx", "-g", "daemon off;"]


