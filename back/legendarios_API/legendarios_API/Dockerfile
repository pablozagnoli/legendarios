FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app
EXPOSE 80
EXPOSE 443

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=build-env /app/out .

ENV ASPNETCORE_ENVIRONMENT Production

ENTRYPOINT ["dotnet", "legendarios_API.dll"]