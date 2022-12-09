#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["legendarios_API/legendarios_API.csproj", "legendarios_API/"]
RUN dotnet restore "legendarios_API/legendarios_API.csproj"
COPY . .
WORKDIR "/src/legendarios_API"
RUN dotnet build "legendarios_API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "legendarios_API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "legendarios_API.dll"]