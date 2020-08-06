package com.java.cube;

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
            .importPackages("com.java.cube");

        noClasses()
            .that()
            .resideInAnyPackage("com.java.cube.service..")
            .or()
            .resideInAnyPackage("com.java.cube.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.java.cube.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
