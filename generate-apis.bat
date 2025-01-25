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

@REM REM ms community
@REM if "%MICROSERVICE%"=="community" (
@REM     call openapi-generator-cli generate -i http://localhost:5000/community/v3/api-docs -g typescript-angular -o ./src/app/apis/community --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
@REM )
@REM if "%MICROSERVICE%"=="all" (
@REM     call openapi-generator-cli generate -i http://localhost:5000/community/v3/api-docs -g typescript-angular -o ./src/app/apis/community --additional-properties=ngVersion=17.3,withInterfaces=true,modelPropertyNaming=original,httpHeaderAccepts='application/json' --generate-alias-as-model
@REM )
