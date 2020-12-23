package com.epam.epmorp.orpimr;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.epam.epmorp.orpimr");

        noClasses()
            .that()
            .resideInAnyPackage("com.epam.epmorp.orpimr.service..")
            .or()
            .resideInAnyPackage("com.epam.epmorp.orpimr.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.epam.epmorp.orpimr.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
