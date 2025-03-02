@echo off

REM Vérifier si un argument a été passé, sinon utiliser une valeur par défaut
if "%1"=="" (
    set MICROSERVICE=all
) else (
    set MICROSERVICE=%1
)

echo Generation de l'api du microservice %MICROSERVICE%

REM ms products
if "%MICROSERVICE%"=="products" (
    call openapi-generator-cli generate -i http://localhost:5000/products/v3/api-docs -g typescript-angular -o ./src/app/apis/products --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)
if "%MICROSERVICE%"=="all" (
    call openapi-generator-cli generate -i http://localhost:5000/products/v3/api-docs -g typescript-angular -o ./src/app/apis/products --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)

REM ms city
if "%MICROSERVICE%"=="city" (
    call openapi-generator-cli generate -i http://localhost:5000/city/v3/api-docs -g typescript-angular -o ./src/app/apis/city --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)
if "%MICROSERVICE%"=="all" (
    call openapi-generator-cli generate -i http://localhost:5000/city/v3/api-docs -g typescript-angular -o ./src/app/apis/city --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)

REM ms community
if "%MICROSERVICE%"=="community" (
    call openapi-generator-cli generate -i http://localhost:5000/community/v3/api-docs -g typescript-angular -o ./src/app/apis/community --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)
if "%MICROSERVICE%"=="all" (
    call openapi-generator-cli generate -i http://localhost:5000/community/v3/api-docs -g typescript-angular -o ./src/app/apis/community --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)


REM ms authentication
if "%MICROSERVICE%"=="auth" (
    call openapi-generator-cli generate -i http://localhost:5000/auth/v3/api-docs -g typescript-angular -o ./src/app/apis/auth --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)
if "%MICROSERVICE%"=="all" (
    call openapi-generator-cli generate -i http://localhost:5000/auth/v3/api-docs -g typescript-angular -o ./src/app/apis/auth --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)


REM ms users
if "%MICROSERVICE%"=="users" (
    call openapi-generator-cli generate -i http://localhost:5000/user/v3/api-docs -g typescript-angular -o ./src/app/apis/user --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)
if "%MICROSERVICE%"=="all" (
    call openapi-generator-cli generate -i http://localhost:5000/user/v3/api-docs -g typescript-angular -o ./src/app/apis/users --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)

REM ms productToCommunity
if "%MICROSERVICE%"=="product-to-community" (
    call openapi-generator-cli generate -i http://localhost:5000/product-to-community/v3/api-docs -g typescript-angular -o ./src/app/apis/product-to-community --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)
if "%MICROSERVICE%"=="all" (
    call openapi-generator-cli generate -i http://localhost:5000/product-to-community/v3/api-docs -g typescript-angular -o ./src/app/apis/product-to-community --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
)